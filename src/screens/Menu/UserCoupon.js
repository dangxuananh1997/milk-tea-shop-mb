import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Agenda } from 'react-native-calendars';

import {
  getUserCouponList,
} from '../../actions/coupon';

import commonStyles from '../../styles/common';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

class UserCoupon extends React.Component {
  static navigationOptions = {
    title: 'Your Coupon',
  }

  componentWillMount() {
    const {
      getUserCouponListProps,
    } = this.props;
    getUserCouponListProps();
  }

  render() {
    const {
      userCouponPackageList,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <Agenda
          items={userCouponPackageList}
          renderItem={item => (
            <View style={[styles.item, { backgroundColor: item.IsExpired ? '#d3d3d3' : 'white' }]}>
              <Text>
                {`Expired Date: ${item.DateExpired}${item.IsExpired ? ' (Expired)' : ''}`}
              </Text>
              <Text>
                {`Drink Quantity: ${item.DrinkQuantity}`}
              </Text>
            </View>
          )}
          selected={`${new Date().toISOString().split('T')[0]}`}
          renderEmptyData={() => <View style={styles.emptyDate} />}
          rowHasChanged={(r1, r2) => r1 !== r2} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userCouponPackageList: state.coupon.userCouponPackageList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserCouponListProps: bindActionCreators(getUserCouponList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCoupon);
