import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Button } from 'react-native'
import { connect } from 'dva';




class Account extends PureComponent {
    static navigationOptions = {
        title: 'Account',
        tabBarLabel: 'Account',
        tabBarIcon: ({ focused, tintColor }) =>
            <Image
                style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
                source={require('../../assets/images/person.png')}
            />,
    }

    gotoLogin = () => {
        //this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Goto Login" onPress={this.gotoLogin} />
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

export default Account
