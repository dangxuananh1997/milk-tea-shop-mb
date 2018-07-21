import { createStackNavigator } from 'react-navigation';

import Coupon from '../screens/Coupon';

const CouponStack = createStackNavigator(
  {
    Coupon,
  },
);

export default CouponStack;
