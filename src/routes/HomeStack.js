import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Cart from '../screens/Cart';

const HomeStack = createStackNavigator(
  {
    Home,
    Cart,
  },
);

export default HomeStack;
