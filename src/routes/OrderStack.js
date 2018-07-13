import { createStackNavigator } from 'react-navigation';
import Order from '../screens/Order';

const OrderStack = createStackNavigator(
  {
    Order,
  },
);

export default OrderStack;
