import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';

const HomeStack = createStackNavigator(
  {
    Home,
  },
);

export default HomeStack;
