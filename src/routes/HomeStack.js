import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ProductInCart from '../screens/ProductInCart';

const HomeStack = createStackNavigator(
  {
    ProductInCart,
    Home,
    Cart,
  },
);

export default HomeStack;
