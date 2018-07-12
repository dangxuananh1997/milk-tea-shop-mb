import { createStackNavigator } from 'react-navigation';

import BottomTab from './BottomTab';

export default RootNav = createStackNavigator(
  {
    Home: BottomTab
  },
  {
    initialRouteName: 'Home',
  }
);