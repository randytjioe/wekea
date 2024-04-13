import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View, useWindowDimensions } from 'react-native';
import CarouselDiscover from '../../../components/Discover/CarouselDiscover';
import MapComponent from '../../../components/Discover/MapComponent';
import TogglerButton from '../../../components/Discover/TogglerButton';

const storeMarker = require('../../../../assets/storeMarker.png');

export default function DiscoverScreen() {
  const { width } = useWindowDimensions();
  const scrollCarouselRef = useRef(null);
  const mapAnimation = new Animated.Value(0);
  const mapRef = useRef(null);
  const carouselAnimation = new Animated.Value(0);
  const carouselAnimationRef = useRef(carouselAnimation);
  const [isShowCarousel, setIsShowCarousel] = useState(true);

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = [
    {
      coordinate: { latitude: 37.8025259, longitude: -122.4351431 },
      title: 'Wekea Drop Store',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: {
        latitude: 37.7896386,
        longitude: -122.421646,
      },
      title: 'Wekea Drop Store 2',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      coordinate: { latitude: 37.7665248, longitude: -122.4161628 },
      title: 'Wekea Drop Store 3',
      address: '1234 Main St, San Francisco, CA 94122',
      image:
        'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  const onPressMarker = (mapData) => {
    const markerId = mapData._targetInst.return.key;
    scrollCarouselRef.current.scrollTo({ index: +markerId, animated: true });
  };

  const interpolations = markers.map((_, index) => {
    const inputRange = [
      [index - 1] * width,
      index * width,
      [index + 1] * width,
    ];
    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });
    return { scale };
  });

  const carouselInterpolate = carouselAnimationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -1000],
    extrapolate: 'clamp',
  });
  const onTogglerCarousel = () => {
    setIsShowCarousel((prev) => !prev);
    Animated.timing(carouselAnimationRef.current, {
      toValue: isShowCarousel ? 1 : 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapComponent
        mapRef={mapRef}
        region={region}
        markers={markers}
        onPressMarker={onPressMarker}
        storeMarker={storeMarker}
        interpolations={interpolations}
      />
      <TogglerButton
        isShowCarousel={isShowCarousel}
        onToggler={onTogglerCarousel}
      />

      <Animated.View
        style={{
          alignItems: 'center',
          transform: [
            {
              translateY: carouselInterpolate,
            },
          ],
        }}
      >
        <CarouselDiscover
          mapAnimation={mapAnimation}
          mapRef={mapRef}
          markers={markers}
          region={region}
          scrollCarouselRef={scrollCarouselRef}
          width={width}
        />
      </Animated.View>
    </View>
  );
}
