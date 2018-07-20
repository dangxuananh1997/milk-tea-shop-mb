import { createStackNavigator } from 'react-navigation';

import SignIn from '../screens/Signing/SignIn';
import Landing from '../screens/Signing/Landing';
import SignUp from '../screens/Signing/SignUp';

const SigningStack = createStackNavigator(
  {
    SignUp,
    Landing,
    SignIn,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

export default SigningStack;
