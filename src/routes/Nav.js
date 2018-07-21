import React from 'react';
import { View } from 'react-native';

import { createSwitchNavigator } from 'react-navigation';

import AuthProcessing from '../screens/Signing/AuthProcessing';
import SigningStack from './SigningStack';
import Tab from './Tab';
import Snackbar from '../components/Snackbar';

const SwitchNav = createSwitchNavigator({
  AuthProcessing,
  SigningStack,
  Tab,
});

const Nav = () => (
  <View style={{ flex: 1 }}>
    <SwitchNav />
    <Snackbar />
  </View>
);

export default Nav;
