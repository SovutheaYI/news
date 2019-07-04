import React from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';

import AllHealth from './subscreens/AllHealth';
import Food from './subscreens/Food';
import Fitness from './subscreens/Fitness';
import Wellness from './subscreens/Wellness';


const TabScreen = createMaterialTopTabNavigator({
  All: {
      screen: AllHealth
  },
  Food: {
    screen: Food
  },
  Fitness: {
    screen: Fitness
  },
  Wellness: {
    screen: Wellness
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
          title: 'Health',
      }
  }
});

class HealthNewsHelper extends React.Component {
  render() {
    return (
      <AppTab/>
    );
  }
}


export default createAppContainer(AppTab);