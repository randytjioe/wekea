import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IconButton, List } from 'react-native-paper';

import Typography from '../Global/Typography';
import priceFormatter from '../../utils/helpers/priceFormatting';

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

export default function CartItem({ item, index, data, setData }) {
  const quantityHandler = (condition) => {
    setData(
      data.map((prev, i) => {
        if (i === index) {
          return {
            ...prev,
            quantity:
              condition === 'increment' ? prev.quantity + 1 : prev.quantity - 1,
          };
        }
        return prev;
      })
    );
  };
  return (
    <List.Item
      style={styles.cartItem}
      left={() => (
        <View style={styles.cartItemLeft}>
          <Image source={{ uri: item.image }} style={styles.cartItemImg} />
          <View>
            <Typography weight="medium" size="large">
              {item.name}
            </Typography>
            <Typography weight="normal" size="medium">
              {priceFormatter(item.price)}
            </Typography>
          </View>
        </View>
      )}
      right={() => (
        <View style={styles.cartItemRight}>
          <IconButton
            icon="plus"
            size={14}
            disabled={data[index].quantity < 1}
            onPress={() => quantityHandler('increment')}
          />
          <Typography weight="medium" size="large">{item.quantity}</Typography>
          <IconButton
            icon="minus"
            size={14}
            disabled={data[index].quantity === 1}
            onPress={() => quantityHandler('decrement')}
          />
        </View>
      )}
    />
  );
}
