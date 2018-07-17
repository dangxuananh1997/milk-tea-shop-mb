import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    height: 150,
    width: '100%',
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
  image: {
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    flex: 1,
    padding: 16,
    paddingTop: 10,
  },
  productName: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 10,
  },
  variantWrapper: {
    height: 100,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  priceWrapper: {
    height: 150,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginBottom: 16,
    marginTop: 6,
  },
  priceAndQuantity: {
    height: 80,
    flexDirection: 'row',
  },
  price: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 2,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  mul: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  quantity: {
    flex: 2,
  },
  totalPrice: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
  },
  totalPriceText: {
    fontSize: 20,
    textAlign: 'right',
  },
  button: {
    marginTop: 16,
  },
});

export default styles;
