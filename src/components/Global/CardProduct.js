import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import Typography from './Typography';

const furnitureJpg = require('../../../assets/kursi.jpg');

const styles = StyleSheet.create({

  cardContainer: {
    width: 150,
    overflow: 'hidden',
    marginRight: 15,
  },
  cardCoverImg: { borderRadius: 0, height: 150 },
  cardTextLabel: {
    fontWeight: '500',
    fontSize: 16,
  }

});

export default function CardProduct() {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate('Details');
      }}
    >
      <Card.Cover source={furnitureJpg} style={styles.cardCoverImg} />
      <Card.Content
        style={{
          padding: 10,
        }}
      >
        <Typography weight="bold" size="medium">
          Furniture
        </Typography>
        <Typography weight="normal" size="medium">
          Rp. 1000.000,-
        </Typography>
      </Card.Content>
    </Card>
  );
}
