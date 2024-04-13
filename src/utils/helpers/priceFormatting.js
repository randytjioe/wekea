const priceFormatter = (price) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',

  }).format(price).replace('Rp', 'Rp. ');

export default priceFormatter;
