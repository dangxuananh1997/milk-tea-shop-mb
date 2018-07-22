import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/Feather';
import { Badge } from 'react-native-elements';

import {
  getUserInfo,
  logOut,
} from '../actions/auth';

import {
  getOrderList,
} from '../actions/order';

import commonStyles from '../styles/common';

const styles = StyleSheet.create({
  avatarContainer: {
    width: '100%',
    justifyContent: 'center',
    height: 180,
    flexDirection: 'row',
    marginTop: 20,
  },
  avatarWrapper: {
    height: 180,
    width: 180,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#555555',
    overflow: 'hidden',
  },
  avatar: {
    height: '100%',
    width: '100%',
  },
  fullName: {
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  menuOptions: {
    height: 40,
    margin: 16,
    marginBottom: 0,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    flexDirection: 'row',
  },
  logoutOption: {
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  icon: {
    flex: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  optionText: {
    flex: 8,
    fontSize: 18,
    textAlignVertical: 'center',
  },
  badgeWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  badge: {
    width: 40,
  },
});

class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  componentDidMount() {
    const {
      orderList,
      getOrderListProps,
    } = this.props;

    if (orderList.length === 0) {
      getOrderListProps();
    }
  }

  logOut() {
    const {
      navigation,
      logOutProps,
    } = this.props;

    logOutProps();
    AsyncStorage.multiRemove(['token', 'tokenExpiredTime']);
    navigation.navigate('AuthProcessing');
  }

  render() {
    const {
      navigation,
      userInfo,
      orderList,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={() => { navigation.navigate('Profile'); }}>
            <Image
              resizeMode="cover"
              style={styles.avatar}
              source={{ uri: userInfo.Avatar }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Profile'); }}>
          <Text style={styles.fullName}>
            {userInfo.FullName}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuOptions}
          onPress={() => { navigation.navigate('Profile'); }}>
          <Icon name="edit" size={20} style={styles.icon} />
          <Text style={styles.optionText}>Edit Profile</Text>
          <View style={styles.badgeWrapper} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuOptions}
          onPress={() => {
            navigation.navigate('Order');
          }}>
          <Icon name="shopping-cart" size={20} style={styles.icon} />
          <Text style={styles.optionText}>Your Order</Text>
          <View style={styles.badgeWrapper}>
            <Badge value={orderList.length} wrapperStyle={styles.badge} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuOptions}
          onPress={() => {
            navigation.navigate('Coupon');
          }}>
          <Icon name="box" size={20} style={styles.icon} />
          <Text style={styles.optionText}>Your Coupon</Text>
          <View style={styles.badgeWrapper}>
            <Badge value={0} wrapperStyle={styles.badge} />
          </View>
        </TouchableOpacity>
        <View style={styles.logoutOption}>
          <TouchableOpacity
            style={styles.menuOptions}
            onPress={() => {
              this.logOut();
            }}>
            <Icon name="log-out" size={20} style={styles.icon} />
            <Text style={styles.optionText}>Log Out</Text>
            <View style={styles.badgeWrapper} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
    userInfo: state.auth.userInfo,
    orderList: state.order.orderList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfoProps: bindActionCreators(getUserInfo, dispatch),
    logOutProps: bindActionCreators(logOut, dispatch),
    getOrderListProps: bindActionCreators(getOrderList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
