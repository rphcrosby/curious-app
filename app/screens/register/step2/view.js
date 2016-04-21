var ImagePickerManager = require('NativeModules').ImagePickerManager;

// Import react components
import React, {
    Component,
    View,
    Text,
    Image
} from 'react-native'
import { connect } from 'react-redux'

// Import screen actions
import { selectDisplayPicture } from './actions'

// Import API actions
import { sendUserUpdate } from '../../../api/user/actions/update'

// Import stylesheets
import screens from '../../../stylesheets/screens'
import forms from '../../../stylesheets/forms'

var options = {
  title: 'Select Profile Photo', // specify null or empty string to remove the title
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
  cameraType: 'front', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 256, // photos only
  maxHeight: 256, // photos only
  aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 0.5, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};

/**
 * Determine what parts of the state to pass to the component
 *
 * @param object state
 */
const mapStateToProps = (state) => {
    return {
        'user': state.api.authentication.user,
        'step2': state.screens.step2
    };
}

class Step2 extends Component
{
    componentDidUpdate() {
        if (this.props.user.property('display_picture') !== undefined) {
            this.props.navigator.replace({ id: 'register.step3' })
        }
    }

    _showImagePicker() {
        const { dispatch } = this.props
        ImagePickerManager.showImagePicker(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePickerManager Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            // You can display the image using either data:
            const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
            dispatch(selectDisplayPicture(source))
          }
        });
    }

    render() {
        return (
            <View style={screens.register_step2.screen}>
                <View style={screens.register_step2.image}>
                    <Image
                        source={{ uri: this.props.step2.display_picture.uri }}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <Text
                    style={screens.register_step2.button}
                    onPress={ () => this._showImagePicker() }
                >UPLOAD</Text>
                <View>
                    <Text
                        style={forms.proceed}
                        onPress={() => this.props.dispatch(sendUserUpdate({
                            display_picture: this.props.step2.display_picture.uri
                        }))}
                    >PROCEED</Text>
                </View>
            </View>
        )
    }
}

Step2 = connect(mapStateToProps)(Step2)

export default Step2;
