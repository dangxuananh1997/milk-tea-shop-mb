import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getOrderList,
} from '../../actions/order';

import OrderItem from '../../components/Order/OrderItem';

import commonStyles from '../../styles/common';

const styles = StyleSheet.create({
  flatList: {
    marginTop: 16,
    paddingBottom: 16,
  },
  item: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
});

class Order extends React.Component {
  static navigationOptions = {
    title: 'Order',
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    const {
      getOrderListProps,
    } = this.props;

    getOrderListProps();
  }

  render() {
    const {
      navigation,
      orderList,
      loading,
    } = this.props;

    return (
      <View style={commonStyles.screen}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={orderList}
          onRefresh={() => { this.getData(); }}
          refreshing={loading}
          renderItem={
            ({ item }) => (
              <View style={styles.item}>
                <OrderItem
                  order={item}
                  goToDetails={(id) => { navigation.navigate('OrderDetails', { orderId: id }); }} />
              </View>
            )
          }
          keyExtractor={item => `${item.Id}`} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.order.loading,
    orderList: state.order.orderList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrderListProps: bindActionCreators(getOrderList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
