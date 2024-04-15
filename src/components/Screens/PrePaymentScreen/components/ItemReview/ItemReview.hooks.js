const { useState } = require('react');
const { useSharedValue, useAnimatedStyle, withSpring } = require('react-native-reanimated');

const useItemReview = () => {
  const itemsMap = [
    {
      title: 'Kaos Polo',
      price: 'Rp 200.000',
      imageUrl: 'https://via.placeholder.com/150',
      quantity: 2,
    },
    {
      title: 'Kaos Polo',
      price: 'Rp 200.000',
      imageUrl: 'https://via.placeholder.com/150',
      quantity: 2,
    },
  ];
  const [isShow, setIsShow] = useState(false);
  const height = useSharedValue(100);
  const handlePress = () => {
    setIsShow(!isShow);
    height.value = isShow ? 100 : itemsMap.length * 100;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    height: withSpring(height.value, { damping: 20, stiffness: 90 }),
    overflow: 'hidden',
  }));

  return {
    handlePress,
    animatedStyles,
    isShow,
    itemsMap
  };
};
export default useItemReview;
