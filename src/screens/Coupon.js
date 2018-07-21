import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getCouponPackage,
  setCreateUserCouponPackage,
  createUserCouponPackage,
  resetCreateUserCouponPackage,
} from '../actions/coupon';

import { showSnackbar } from '../actions/snackbar';

import CouponPackage from '../components/Coupon/CouponPackage';
import BuyCouponPackageModal from '../components/Coupon/BuyCouponPackageModal';
import ModalLoading from '../components/ModalLoading';

import commonStyles from '../styles/common';

const styles = StyleSheet.create({
  descriptionCard: {
    margin: 16,
    borderRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    padding: 10,
  },
  flatList: {
  },
  item: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
});

class Coupon extends React.Component {
  static navigationOptions = {
    title: 'Coupon',
  };

  componentWillMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    const {
      createUserCouponSuccess,
      showSnackbarProps,
      resetProps,
    } = this.props;

    if (prevProps.createUserCouponSuccess == null && createUserCouponSuccess != null) {
      showSnackbarProps(createUserCouponSuccess ? 'Purchased successfully!' : 'Purchased failed!');
      resetProps();
    }
  }

  getData() {
    const {
      getCouponPackageProps,
    } = this.props;

    getCouponPackageProps();
  }

  render() {
    const {
      createUserCoupon,
      couponPackageList,
      setCreateUserCouponPackageProps,
      createUserCouponPackageProps,
      loading,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <ModalLoading loading={loading} />
        <BuyCouponPackageModal
          couponPackage={createUserCoupon}
          visible={createUserCoupon != null}
          confirmBuy={(id) => { createUserCouponPackageProps(id); }}
          cancelBuy={() => { setCreateUserCouponPackageProps(null); }} />
        <View style={styles.descriptionCard}>
          <Text style={commonStyles.sourceSansProRegular}>
            With Coupon Package, you will have 30 Coupon of
            free drinks for every single day in one month
          </Text>
        </View>
        <FlatList
          style={styles.flatList}
          renderItem={
            ({ item }) => (
              <View style={styles.item}>
                <CouponPackage
                  couponPackage={item}
                  buyPackage={(couponPackage) => { setCreateUserCouponPackageProps(couponPackage); }} />
              </View>
            )
          }
          data={couponPackageList}
          keyExtractor={
            item => `${item.Id}`
          } />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    couponPackageList: state.coupon.couponPackageList,
    totalCouponPackage: state.coupon.totalCouponPackage,
    createUserCoupon: state.coupon.createUserCoupon,
    loading: state.coupon.loading,
    createUserCouponSuccess: state.coupon.createUserCouponSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCouponPackageProps: bindActionCreators(getCouponPackage, dispatch),
    setCreateUserCouponPackageProps: bindActionCreators(setCreateUserCouponPackage, dispatch),
    createUserCouponPackageProps: bindActionCreators(createUserCouponPackage, dispatch),
    resetProps: bindActionCreators(resetCreateUserCouponPackage, dispatch),
    showSnackbarProps: bindActionCreators(showSnackbar, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);
