import { View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CartItem from '../CartItem/CartItem';
import styles from './Swipable.styles';

export default function SwipableCart({
  item,
  setData,
  data,
  index,
  handleDelete,
}) {
  const itemHeight = useSharedValue(100);
  const rCartContainerStyle = useAnimatedStyle(() => ({
    height: itemHeight.value,
  }));
  return (
    <Animated.View style={rCartContainerStyle}>
      <Swipeable
        onSwipeableOpen={() => {
          itemHeight.value = withTiming(0);
          setTimeout(() => {
            handleDelete(item.id);
          }, 300);
        }}
        renderRightActions={() => (
          <View style={styles.cartTrashButton}>
            <IconButton icon="delete" size={24} />
          </View>
        )}
      >
        <CartItem item={item} data={data} setData={setData} index={index} />
      </Swipeable>
    </Animated.View>
  );
}
