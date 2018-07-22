import { createStackNavigator } from 'react-navigation';

import Menu from '../screens/Menu';
import Order from '../screens/Menu/Order';
import OrderDetails from '../screens/Menu/OrderDetails';

const MenuStack = createStackNavigator(
  {
    Menu,
    Order,
    OrderDetails,
  },
);

export default MenuStack;
