import { useMemo, useState } from 'react';
import DUMMY_CART_ITEMS from './CartScreen.constants';
import SwipableCart from './components/SwipableCart/SwipableCart';

const useCartScreen = () => {
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

  return {
    data,
    renderItem,
    totalPrice,
  };
};

export default useCartScreen;
