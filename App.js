import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Text } from 'react-native';

import TopNewsHelper from './src/screens/TopNewsHelper';
import EntertainmentNewsHelper from './src/screens/EntertainmentNewsHelper';
import SportNewsHelper from './src/screens/SportNewsHelper';
import ScienceNewsHelper from './src/screens/ScienceNewsHelper';
import TechNewsHelper from './src/screens/TechNewsHelper';
import HealthNewsHelper from './src/screens/HealthNewsHelper';
import BusNewsHelper from './src/screens/BusNewsHelper';


import SettingScreen from './src/screens/SettingScreen';
import DrawerMenu from './src/screens/DrawerMenu';

import DetailScreen from './src/screens/DetailScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const theme = {
    DefaultTheme,
    colors: {
        primary: '#3498db',
        accent: '#f1c40f',
    }
}

export default class App extends React.Component {

    render() {
        return (
            <PaperProvider theme={theme}>
                <AppContainer/>
            </PaperProvider>
        );
    }
}

const RootStack = createDrawerNavigator({
    TopNews: {
        screen: TopNewsHelper,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-home'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Top News'
        }
    },
    BusNews: {
        screen: BusNewsHelper,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-trending-up'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Business'
        }
    },
    EntertainmentNews: {
        screen: EntertainmentNewsHelper,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-image'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Entertainment'
        }
    },
    SportNews: {
        screen: SportNewsHelper,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-football'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Sport'
        }
    },
    ScienceNews: {
        screen: ScienceNewsHelper,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-flash'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Science'
        }
    },
    HealthNews: {
        screen: HealthNewsHelper,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-walk'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Health'
        }
    },
    TechNews: {
        screen: TechNewsHelper,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-stats'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Technology'
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name={'ios-cog'} style={{ fontSize: 26, color: tintColor }} />
            ),
            title: 'Setting'
        }
    }
},
{
    initialRouteName: 'TopNews',
    drawerWidth: 280,
    drawerBackgroundColor: '#FF473A',
    contentComponent: DrawerMenu,
    contentOptions: {
        // activeTintColor: '#77d353',
        activeTintColor: '#FFF',
        inactiveTintColor: '#FFF',
        labelStyle: {
            fontWeight: '600',
            color: '#FFFFFF',
            fontSize: 16
        },
        activeLabelStyle: {
            color: '#FFF'
        }
    }
}
);


const AppStack = createStackNavigator({
    Menu: {
        screen: RootStack,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{ fontWeight: '400', fontSize: 16, marginBottom: 4 }}>{`News\nPortal`}</Text>,
            headerRight: (
                <TouchableOpacity>
                    <Icon name={'ios-search'} size={30} color={'#000'} style={{ marginRight: 16 }} />
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Icon name={'ios-menu'} size={30} color={'#000'} style={{ marginLeft: 16 }} />
                </TouchableOpacity>
            )
        })
    },
    Detail: {
        screen: DetailScreen
    }
},
{
    initialRouteName: 'Menu',
    drawerBackgroundColor: '#FF473A',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#7dd353'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
});


const AppContainer = createAppContainer(AppStack);