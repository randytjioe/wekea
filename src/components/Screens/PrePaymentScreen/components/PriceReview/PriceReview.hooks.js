const usePriceReview = () => {
  const paymentList = [
    {
      title: 'Ongkos Kirim',
      price: 20000,
      key: 'ongkir',
    },
    {
      title: 'SubTotal',
      price: 200000,
      key: 'subtotal',
    },
    {
      title: 'Admin Fee',
      price: 2000,
      key: 'admin',
    },
  ];
  const keyValue = ['admin', 'ongkir', 'subtotal'];
  const sortPaymentList = paymentList.sort((a, b) => {
    const indexA = keyValue.indexOf(a.key);
    const indexB = keyValue.indexOf(b.key);
    return indexA - indexB;
  });
  return {
    sortPaymentList,
    paymentList
  };
};
export default usePriceReview;
