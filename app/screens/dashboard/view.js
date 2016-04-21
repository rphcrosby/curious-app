// Import react components
import React, {
    Component,
    View,
    Text
} from 'react-native'
import { connect } from 'react-redux'

/**
 * Determine what parts of the state to pass to the component
 *
 * @param object state
 */
const mapStateToProps = (state) => {
    return {

    };
}

class Dashboard extends Component
{
    render() {
        return (
            <View>
                <Text>DASHBOARD</Text>
            </View>
        )
    }
}

Dashboard = connect(mapStateToProps)(Dashboard)

export default Dashboard;
