import { useMemo, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import SwipableCart from '../../../components/Cart/SwipableCart';
import Container from '../../../components/Global/Container';
import Typography from '../../../components/Global/Typography';
import priceFormatter from '../../../utils/helpers/priceFormatting';

export default function CartScreen() {
  // Dummy Cart Item
  const DUMMY_CART_ITEMS = [
    {
      id: 1,
      name: 'Lemari',
      price: 10,
      image: 'https://picsum.photos/700',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Meja',
      price: 20,
      image: 'https://picsum.photos/700',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Kursi',
      price: 30,
      image: 'https://picsum.photos/700',
      quantity: 1,
    },
  ];

  const [data, setData] = useState(DUMMY_CART_ITEMS);
  const totalPrice = useMemo(() =>
    data.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const renderItem = ({ item, index }) => (
    <SwipableCart
      data={data}
      setData={setData}
      handleDelete={handleDelete}
      item={item}
      index={index}
    />
  );
  return (
    <Container>
      <Typography size="large" weight="bold">
        Cart
      </Typography>
      <FlatList data={data} renderItem={renderItem} />
      <Button mode="outlined" onPress={() => alert('Checkout')}>
        Checkout&nbsp;
        {priceFormatter(totalPrice)}
      </Button>
    </Container>
  );
}
