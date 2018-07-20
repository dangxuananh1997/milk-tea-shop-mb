import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import HomeStack from './HomeStack';
import CouponStack from './CouponStack';
import MenuStack from './MenuStack';

const Tab = createBottomTabNavigator(
  {
    Home: HomeStack,
    Order: CouponStack,
    Menu: MenuStack,
    // Coupon: CouponStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Coupon':
            iconName = 'box';
            break;
          case 'Order':
            iconName = 'layers';
            break;
          case 'Menu':
            iconName = 'menu';
            break;
          default:
            iconName = 'feather';
            break;
        }
        return <Icon name={iconName} size={focused ? 25 : 20} color={tintColor} />;
      },
      tabBarButtonComponent: TouchableOpacity,
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default Tab;
