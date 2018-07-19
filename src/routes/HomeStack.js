import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Cart from '../screens/Home/Cart';
import ProductInCart from '../screens/Home/ProductInCart';
import CreateOrder from '../screens/Home/CreateOrder';

const HomeStack = createStackNavigator(
  {
    Home,
    ProductInCart,
    Cart,
    CreateOrder,
  },
);

export default HomeStack;
