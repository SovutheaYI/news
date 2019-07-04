import React from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';

import AllEntertainment from './subscreens/AllEntertainment';
import Culture from './subscreens/Culture';
import Screen from './subscreens/Screen';
import Binge from './subscreens/Binge';
import Stars from './subscreens/Stars';

const TabScreen = createMaterialTopTabNavigator({
  All: {
      screen: AllEntertainment
  },
  Culture: {
    screen: Culture
  },
  Screen: {
    screen: Screen
  },
  Binge: {
    screen: Binge
  },
  Stars: {
    screen: Stars
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
          title: 'Entertainment',
      }
  }
});

class EntertainmentNewsHelper extends React.Component {
  render() {
    return (
      <AppTab/>
    );
  }
}


export default createAppContainer(AppTab);