import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from './page/home';
import Detail from './page/detail';

const Tabs = TabNavigator({
    Home: { screen: Home },
    Detail: { screen: Detail }
}, {
    tabBarOptions: {
        activeTintColor: '#7a86a2',
        style: {
            backgroundColor: '#fff'
        }
    },
    lazy: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom  //解决安卓底栏不显示图标问题
});

const Navigation = StackNavigator({
    Tabs: { screen: Tabs }
}, {
    initialRouteName: 'Tabs',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#2D2D2D',
        },
        headerBackTitle: null,
        headerTintColor: '#FFFFFF',
    },
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal, // 安卓导航进入 左右方式
    }),
    headerMode: 'screen'
});

export default Navigation;