import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { convertToVND } from '../../tools/currencyConverter';
import dateConverter from '../../tools/dateConverter';

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: '100%',
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
  },
  cardTouch: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  infoWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 30,
  },
  infoRow: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  info: {
    flex: 9,
    color: '#000000',
  },
  statusBar: {
    position: 'absolute',
    width: '100%',
    height: 30,
    bottom: 0,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  orderStatus: {
    flex: 1,
    textAlign: 'left',
  },
  date: {
    flex: 1,
    textAlign: 'right',
  },
});

const OrderItem = ({ order, goToDetails }) => (
  <View style={styles.card}>
    <TouchableOpacity
      style={styles.cardTouch}
      onPress={() => { goToDetails(order.Id); }}>
      <View style={styles.wrapper}>
        <View style={styles.infoWrapper}>
          <View style={styles.infoRow}>
            <Icon name="user" size={15} color="#000000" style={styles.icon} />
            <Text style={styles.info}>{`Customer: ${order.CustomerName}`}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="phone" size={15} color="#000000" style={styles.icon} />
            <Text style={styles.info}>{`Phone: ${order.ContactPhone}`}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="map-pin" size={15} color="#000000" style={styles.icon} />
            <Text style={styles.info}>{`Address: ${order.DeliveryAddress}`}</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="credit-card" size={15} color="#000000" style={styles.icon} />
            <Text style={styles.info}>{`Total: ${convertToVND(order.TotalPrice)}`}</Text>
          </View>
        </View>
        <View style={[
          styles.statusBar,
          {
            backgroundColor: order.Status === 'Pending'
              ? '#ffff72'
              : order.Status === 'Approved'
                ? '#98ee99'
                : '#ff7961',
          }]}>
          <Text style={styles.orderStatus}>
            {order.Status}
          </Text>
          <Text style={styles.date}>
            {dateConverter(order.OrderDate)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default OrderItem;
