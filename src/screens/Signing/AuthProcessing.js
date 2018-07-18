import React from 'react';

import {
  View,
  Image,
  AsyncStorage,
  StyleSheet,
} from 'react-native';

import commonStyles from '../../styles/common';

import ModalLoading from '../../components/ModalLoading';

const background = require('../../../assets/background.jpg');

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
  },
});

class AuthProcessing extends React.Component {
  async componentDidMount() {
    const { navigation } = this.props;

    const token = await AsyncStorage.getItem('token');
    setTimeout(() => {
      navigation.navigate(token ? 'Tab' : 'SigningStack');
    }, 800);
  }

  render() {
    return (
      <View style={commonStyles.screen}>
        <Image
          style={styles.bgImage}
          resizeMode="cover"
          source={background} />
        <ModalLoading loading={false} />
      </View>
    );
  }
}

export default AuthProcessing;
