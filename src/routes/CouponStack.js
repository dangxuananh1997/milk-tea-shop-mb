import { createStackNavigator } from 'react-navigation';

import Coupon from '../screens/Coupon';
import Order from '../screens/Menu/Order';

const CouponStack = createStackNavigator(
  {
    Order,
    Coupon,
  },
);

export default CouponStack;
