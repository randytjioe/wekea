import { useState } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { BackButton, BulletCardItem, BulletCardWrapper, ImageItem } from './CarouselSection.styles';

function BulletIndicator({ data, bulletInterpolate }) {
  return (
    <BulletCardWrapper>
      {data?.map((_, index) => (
        <BulletCardItem
          style={{
            opacity: bulletInterpolate[index].opacity,
          }}
        />
      ))}
    </BulletCardWrapper>
  );
}

export default function CarouselSection({ navigation, data }) {
  const { width } = Dimensions.get('window');
  const [scrollIndex, setScrollIndex] = useState(0);
  const bullerScrollView = new Animated.Value(0);

  const bulletInterpolate = data.images?.map((_, index) => {
    const opacity = bullerScrollView.interpolate({
      inputRange: scrollIndex === index ? [0, 1, 2] : [0, 1, 2],
      outputRange: scrollIndex === index ? [1, 0, 1] : [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });
    return { opacity };
  });
  return (
    <View>
      <BackButton
        name="arrow-back"
        size={30}
        color="#eee"
        onPress={() => navigation.goBack()}
      />
      <Carousel
        loop={false}
        width={width}
        height={400}
        data={data.images}
        renderItem={({ item }) => <ImageItem source={item} />}
        onSnapToItem={(index) => setScrollIndex(index)}
      />
      <BulletIndicator
        data={data.images}
        bulletInterpolate={bulletInterpolate}
      />
    </View>
  );
}
