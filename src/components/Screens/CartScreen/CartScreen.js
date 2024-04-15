import Container from '@components/Shared/Container/Container';
import Typography from '@components/Shared/Typography/Typography';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

import priceFormatter from '@utils/helpers/priceFormatting';
import useCartScreen from './CartScreen.hooks';

export default function CartScreen({ navigation }) {
  const { data, renderItem, totalPrice } = useCartScreen();
  return (
    <Container>
      <Typography size="large" weight="bold">
        Cart
      </Typography>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('PrePayment')}
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        Checkout&nbsp;
        {priceFormatter(totalPrice)}
      </Button>
    </Container>
  );
}
