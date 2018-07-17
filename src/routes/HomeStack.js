import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import ProductInCart from '../screens/ProductInCart';

const HomeStack = createStackNavigator(
  {
    Home,
    ProductInCart,
    Cart,
  },
);

export default HomeStack;
