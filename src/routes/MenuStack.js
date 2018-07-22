import { createStackNavigator } from 'react-navigation';

import Menu from '../screens/Menu';
import Order from '../screens/Menu/Order';
import OrderDetails from '../screens/Menu/OrderDetails';
import Profile from '../screens/Menu/Profile';

const MenuStack = createStackNavigator(
  {
    Menu,
    Order,
    OrderDetails,
    Profile,
  },
);

export default MenuStack;
