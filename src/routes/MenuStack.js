import { createStackNavigator } from 'react-navigation';

import Menu from '../screens/Menu';
import Order from '../screens/Menu/Order';

const MenuStack = createStackNavigator(
  {
    Menu,
    Order,
  },
);

export default MenuStack;
