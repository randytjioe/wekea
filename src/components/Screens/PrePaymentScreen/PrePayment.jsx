import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import AddressReview from './components/AddressReview';
import ExpeditionReview from './components/ExpeditionReview';
import ItemReview from './components/ItemReview';
import PlatformPayment from './components/PlatformPayment/PlatformPayment';
import PriceReview from './components/PriceReview';

export default function PrePayment({ navigation }) {
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
      <PlatformPayment />
      <PriceReview />

      <Button
        mode="contained"
        style={{
          margin: 10,
          padding: 5,
        }}
        onPress={() => navigation.navigate('AfterPayment')}
      >
        Proses Pembelian
      </Button>
    </ScrollView>
  );
}
