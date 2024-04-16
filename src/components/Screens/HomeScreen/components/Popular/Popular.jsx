import { ScrollView, View } from 'react-native';
import CardProduct from '@components/Shared/CardProduct/CardProduct';
import Typography from '@components/Shared/Typography/Typography';

export default function Popular() {
  return (
    <View>
      <Typography size="large" weight="bold">
        Popular
      </Typography>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 10,
        }}
      >
        {Array.from(Array(4)).map(() => (
          <CardProduct />
        ))}
      </ScrollView>
    </View>
  );
}
