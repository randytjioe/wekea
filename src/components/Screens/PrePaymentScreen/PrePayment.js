import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import AddressReview from './components/AddressReview';
import ExpeditionReview from './components/ExpeditionReview';
import ItemReview from './components/ItemReview';
import PriceReview from './components/PriceReview';

export default function PrePayment() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <AddressReview
        name="Randy"
        address="Tangerang, Banten"
        phone="087895238280"
        title="Rumah"
      />
      <ItemReview />
      <ExpeditionReview />
      <PriceReview />

      <Button
        mode="contained"
        style={{
          margin: 10,
          padding: 5,
        }}
      >
        Pilih Metode Pembayaran
      </Button>
    </ScrollView>
  );
}
