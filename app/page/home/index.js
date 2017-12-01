import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Button } from 'react-native'
import { connect } from 'dva';

//import { NavigationActions } from '../utils'

export default class Home extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {}
    }

    static navigationOptions = {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) =>
            <Image
                style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
                source={require('../../assets/images/house.png')}
            />,
    }

    gotoDetail = () => {
        //this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Goto Detail" onPress={this.gotoDetail} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    },
})


