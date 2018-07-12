import React from 'react';

import { createBottomTabNavigator } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';

import Home from './../screens/Home';
import Orders from './../screens/Orders';
import Settings from './../screens/Settings';

export default class BottomTab extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Home'),
    };
  };
  
  render() {
    return <Tab />;
  }

}

const Tab = createBottomTabNavigator(
  {
    Home: Home,
    Orders: Orders,
    Settings: Settings
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = 'feather';
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Orders':
            iconName = 'shopping-cart';
            break;
          case 'Settings':
            iconName = 'settings';
            break;
        }
        return <Feather name={iconName} size={focused ? 25 : 20} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);