import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import commonStyles from '../../styles/common';

import {
  getOrderDetails,
} from '../../actions/order';

import OrderDetailsItem from '../../components/Order/OrderDetailsItem';

import { convertToVND } from '../../tools/currencyConverter';

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
  },
  totalPrice: {
    fontSize: 18,
    textAlign: 'right',
    width: '100%',
    height: 30,
    paddingRight: 10,
  },
});

class OrderDetails extends React.Component {
  static navigationOptions = {
    title: 'Order Details',
  };

  componentWillMount() {
    const {
      navigation,
      getOrderDetailsProps,
    } = this.props;
    const orderId = navigation.getParam('orderId', 15);
    getOrderDetailsProps(orderId);
  }

  render() {
    const {
      orderDetails,
      loading,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <View style={styles.card}>
          <FlatList
            data={loading ? [] : orderDetails.OrderDetails}
            onRefresh={() => {}}
            refreshing={loading}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <OrderDetailsItem orderDetails={item} />
              </View>
            )}
            keyExtractor={item => `${item.Id}`} />
          <Text style={styles.totalPrice}>
            {`Total: ${convertToVND(orderDetails.TotalPrice)}`}
          </Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderDetails: state.order.orderDetails,
    loading: state.order.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrderDetailsProps: bindActionCreators(getOrderDetails, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
