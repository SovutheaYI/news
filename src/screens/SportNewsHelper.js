import React from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Football from './subscreens/Football';
import Skiing from './subscreens/Skiing';
import AllSport from './subscreens/AllSport';
import Tennis from './subscreens/Tennis';
import F1 from './subscreens/F1';
import Golf from './subscreens/Golf';

const TabScreen = createMaterialTopTabNavigator({
  All: {
      screen: AllSport
  },
  Football: {
      screen: Football
  },
  Tennis: {
    screen: Tennis
  },
  SKiing: {
    screen: Skiing
  },
  Golf: {
    screen: Golf
  },
  F1: {
    screen: F1
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
          textAlign: 'center',
          fontSize: 12
      },
      indicatorStyle: {
          borderBottomColor: '#FF473A',
          borderBottomWidth: 3,
          width: 'auto'
      },
      tabStyle: {
          width: 'auto'
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
          title: 'Sport',
      }
  }
});

class SportNewsHelper extends React.Component {
  render() {
    return (
      <AppTab/>
    );
  }
}


export default createAppContainer(AppTab);