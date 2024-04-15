import Typography from '@components/Shared/Typography/Typography';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

const adsAsset = require('../../../../../../assets/ads.png');

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
      <Typography size="sm"> Promosi Minggu Ini</Typography>
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
