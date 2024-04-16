import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import Typography from '../Typography/Typography';
import styles from './CardProduct.styles';

const furnitureJpg = require('../../../../assets/kursi.jpg');

export default function CardProduct() {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate('Details');
      }}
    >
      <Card.Cover source={furnitureJpg} style={styles.cardCoverImg} />
      <Card.Content
        style={{
          padding: 10,
        }}
      >
        <Typography weight="bold" size="medium">
          Furniture
        </Typography>
        <Typography weight="normal" size="medium">
          Rp. 1000.000,-
        </Typography>
      </Card.Content>
    </Card>
  );
}
