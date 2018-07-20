import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import commonStyles from '../../styles/common';

const background = require('../../../assets/background.jpg');

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  buttonWrapper: {
    height: 100,
    width: '100%',
    padding: 20,
    position: 'absolute',
    bottom: 40,
  },
  signIn: {
    height: 40,
    padding: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#F9AA33',
  },
  signInText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  signUp: {
    marginTop: 5,
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline',
  },
});

class Landing extends React.Component {
  componentDidMount() { }

  render() {
    const { navigation } = this.props;

    return (
      <View style={commonStyles.screen}>
        <Image
          style={styles.bgImage}
          resizeMode="cover"
          source={background} />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => { navigation.push('SignIn'); }}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.push('SignUp'); }}>
            <Text style={styles.signUp}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Landing;
