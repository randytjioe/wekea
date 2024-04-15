import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  cartItemLeft: {
    margin: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cartItemImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  cartItemRight: {
    alignItems: 'center',
    margin: 0,
    flexDirection: 'row',
  },
});

export default styles;
