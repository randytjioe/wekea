import { View, Image, useWindowDimensions, StyleSheet } from 'react-native';

import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

export default function CustomCarousel() {
  const { width } = useWindowDimensions();
  const dataCarousel = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  const styles = StyleSheet.create({
    imageCarousel: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
  });

  return (
    <View style={{ alignItems: 'center' }}>
      <Carousel
        loop={false}
        width={width - 30}
        height={200}
        autoPlay
        data={dataCarousel}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <Image
            style={styles.imageCarousel}
            source={{
              uri: item.imageUrl,
            }}
          />
        )}
      />
    </View>
  );
}
