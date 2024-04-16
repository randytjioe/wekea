import { Image, View, useWindowDimensions } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import dataCarousel from './CustomCarousel.constants';
import styles from './CustomCarousel.styles';

export default function CustomCarousel() {
  const { width } = useWindowDimensions();

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
