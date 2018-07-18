import { createStackNavigator } from 'react-navigation';

import SignIn from '../screens/Signing/SignIn';
import Landing from '../screens/Signing/Landing';

const SigningStack = createStackNavigator(
  {
    SignIn,
    Landing,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

export default SigningStack;
