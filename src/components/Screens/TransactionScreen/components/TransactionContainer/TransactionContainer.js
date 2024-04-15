import Badge from '@components/Shared/Badge/Badge';
import ButtonWithIcon from '@components/Shared/ButtonWithIcon/ButtonWithIcon';
import Typography from '@components/Shared/Typography/Typography';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import TransactionCard from '../TransactionCard';
import styles from './TransactionContainer.styles';

export default function TransactionContainer({ data }) {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionHeader}>
        <Typography size="normal" weight="medium">
          {data?.date}
        </Typography>

        <Badge label="Sedang Dikirim" variant="success" mode="contained" />
      </View>
      {data?.items?.map((i) => (
        <TransactionCard item={i} />
      ))}
      <Divider />
      <View style={styles.transactionFooter}>
        <ButtonWithIcon
          icon="truck"
          label="Lacak"
          mode="outlined"
          size="md"
          variant="success"
        />
      </View>
    </View>
  );
}
