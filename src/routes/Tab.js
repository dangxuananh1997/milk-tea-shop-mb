import React from 'react';

import { createBottomTabNavigator } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import HomeStack from './HomeStack';
import OrderStack from './OrderStack';
import SettingStack from './SettingStack';

export default Tab = createBottomTabNavigator(
  {
    Home: HomeStack,
    Order: OrderStack,
    Setting: SettingStack
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
          case 'Order':
            iconName = 'shopping-cart';
            break;
          case 'Setting':
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