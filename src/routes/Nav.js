import { createSwitchNavigator } from 'react-navigation';

import AuthProcessing from '../screens/Signing/AuthProcessing';
import SigningStack from './SigningStack';
import Tab from './Tab';

const Nav = createSwitchNavigator({
  AuthProcessing,
  SigningStack,
  Tab,
});

export default Nav;
