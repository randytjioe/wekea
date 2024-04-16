import Typography from '@components/Shared/Typography';
import SuccessLottie from 'assets/lottie/success.json';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function AfterPayment({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView
        source={SuccessLottie}
        autoPlay
        loop={false}
        style={{ width: 200, height: 200 }}
      />
      <Typography size="large" weight="bold" align="center">
        Pembayaran Berhasil
      </Typography>
      <Typography size="small" align="center">
        Pembayaran anda sudah kami terima
      </Typography>
      <Button
        mode="outlined"
        style={{ marginTop: 30, width: 200 }}
        onPress={() => navigation.navigate('Home')}
      >
        Kembali ke Beranda
      </Button>
      <Button
        mode="contained"
        style={{ marginTop: 10, width: 200 }}
        onPress={() => navigation.navigate('Details')}
      >
        Lihat Detail Pesanan
      </Button>
    </View>
  );
}
