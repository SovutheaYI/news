import React from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Markets from './subscreens/Markets';
import AllBusiness from './subscreens/AllBusiness';
import Media from './subscreens/Media';

const TabScreen = createMaterialTopTabNavigator({
  All: {
      screen: AllBusiness
  },
  Markets: {
    screen: Markets
  },
  Media: {
    screen: Media
  }
},
{
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#f8f8f8',
      style: {
        backgroundColor: '#535f67'
      },
      labelStyle: {
          textAlign: 'center'
      },
      indicatorStyle: {
          borderBottomColor: '#FF473A',
          borderBottomWidth: 4
      }
  }
});

const AppTab = createStackNavigator({
  TabScreen: {
      screen: TabScreen,
      navigationOptions: {
          headerStyle: {
              backgroundColor: '#FF473A',
          },
          headerTintColor: '#fff',
          title: 'Business',
      }
  }
});

class BusNewsHelper extends React.Component {
  render() {
    return (
      <AppTab/>
    );
  }
}


export default createAppContainer(AppTab);