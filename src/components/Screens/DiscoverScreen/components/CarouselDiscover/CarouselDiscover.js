import Carousel from 'react-native-reanimated-carousel';
import CardDiscoverItem from '../CardDiscoverItem/CardDiscoverItem';

export default function CarouselDiscover({
  scrollCarouselRef,
  mapRef,
  markers,
  width,
  mapAnimation,
  region,
}) {
  return (
    <Carousel
      ref={scrollCarouselRef}
      loop={false}
      style={{ top: 20 }}
      width={width - 30}
      height={250}
      autoPlay
      data={markers}
      scrollAnimationDuration={1000}
      onProgressChange={(progress) => {
        mapAnimation.setValue(Math.abs(progress));
      }}
      onSnapToItem={(index) => {
        const { coordinate } = markers[index];
        mapRef.current.animateToRegion({
          ...coordinate,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        });
      }}
      renderItem={({ item }) => <CardDiscoverItem item={item} />}
    />
  );
}
