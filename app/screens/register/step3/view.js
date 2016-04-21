var _ = require('lodash')

// Import react components
import React, {
    Component,
    View,
    TextInput,
    Text,
    ListView,
    TouchableHighlight,
    TabBarIOS
} from 'react-native'
import { connect } from 'react-redux'

// Import screen actions
import {
    typeTagSearch
} from './actions'

// Import API actions
import {
    sendSearch
} from '../../../api/search/actions'

import {
    sendTagSubscribe,
    sendTagUnsubscribe
} from '../../../api/user/actions/tags'

// Import stylesheets
import screens from '../../../stylesheets/screens'
import forms from '../../../stylesheets/forms'

/**
 * Determine what parts of the state to pass to the component
 *
 * @param object state
 */
const mapStateToProps = (state) => {
    return {
        user: state.api.authentication.user,
        step3: state.screens.step3,
        search: state.api.search
    };
}

class Step3 extends Component
{
    /**
     * When the state updates, check whether we should be progressing to the
     * next screen or not
     *
     */
    componentDidUpdate() {
        const { step3, search } = this.props;

        // If the search query is longer than 3 characters and we haven't already
        // searched using this query then perform a search
        if (step3.query.length > 3 && step3.query !== search.query) {
            this.props.dispatch(sendSearch(step3.query, 'tags'))
        }
    }

    toDashboard() {
        this.props.navigator.replace({ id: 'dashboard' })
    }

    generateListView() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        var tags = this.props.search.results.tags;
        tags = tags.data === undefined ? [] : tags.data;
        return ds.cloneWithRows(tags)
    }

    render() {
        const { step3, dispatch } = this.props
        return (
            <View style={screens.register_step3.screen}>
                <View style={screens.register_step3.search}>
                    <Text style={forms.text_label}>SEARCH</Text>
                    <View style={forms.text_wrapper}>
                        <TextInput
                            style={forms.text_input}
                            onChangeText={(text) => dispatch(typeTagSearch(text))}
                            value={step3.query}
                            autoCapitalize={'none'}
                            keyboardType={'numbers-and-punctuation'}
                        />
                    </View>
                </View>
                <View style={screens.register_step3.results}>
                    <ListView
                        enableEmptySections={true}
                        dataSource={this.generateListView()}
                        renderRow={(rowData) => this._renderRow(rowData)}
                    />
                </View>
                <View style={screens.register_step3.buttons}>
                    <View style={forms.form_buttons}>
                        <Text style={forms.proceed} onPress={() => this.toDashboard()}>
                            FINISH
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    _handleSubscribeButtonPress(name) {
        if (this.props.user.hasTag(name)) {
            this.props.dispatch(sendTagUnsubscribe([name]))
        } else {
            this.props.dispatch(sendTagSubscribe([name]))
        }
    }

    _renderSubscribeButtonText(name) {
        if (this.props.user.hasTag(name)) {
            return 'UNSUBSCRIBE'
        } else {
            return 'SUBSCRIBE'
        }
    }

    _renderRow(rowData) {
        return (
            <View style={screens.register_step3.subscribe}>
                <Text style={screens.register_step3.subscribe_text}>{ '#' + rowData.name }</Text>
                <Text
                    style={[forms.button, screens.register_step3.subscribe_button]}
                    onPress={() => this._handleSubscribeButtonPress(rowData.name) }
                >{ this._renderSubscribeButtonText(rowData.name) }</Text>
            </View>
        )
    }
}

Step3 = connect(mapStateToProps)(Step3)

export default Step3;
