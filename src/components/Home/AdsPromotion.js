import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';

const adsAsset = require('../../../assets/ads.png');

export default function AdsPromotion() {
  const styles = StyleSheet.create({
    pressableComponent: {
      flex: 1,
      height: 100,
      margin: 5,
    },
    imagePressable: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'gray',
    },
  });
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        Promosi Minggu Ini
      </Text>
      <FlatList
        style={{ marginTop: 5 }}
        numColumns={2}
        data={Array(4)}
        renderItem={() => (
          <Pressable style={styles.pressableComponent}>
            <Image source={adsAsset} style={styles.imagePressable} />
          </Pressable>
        )}
      />
    </View>
  );
}
