import { createStackNavigator } from 'react-navigation';

import SignIn from '../screens/Signing/SignIn';
import Landing from '../screens/Signing/Landing';
import SignUp from '../screens/Signing/SignUp';

const SigningStack = createStackNavigator(
  {
    Landing,
    SignIn,
    SignUp,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

export default SigningStack;
