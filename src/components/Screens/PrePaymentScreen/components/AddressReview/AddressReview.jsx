import Typography from '@components/Shared/Typography';
import { Card } from 'react-native-paper';
import CardWrapper from '../CardWrapper';

export default function AddressReview({ title, name, phone, address }) {
  return (
    <CardWrapper
      title="Alamat Pengiriman"
      rightContent={() => <Typography size="small">Ubah</Typography>}
    >
      <Card.Content
        style={{
          display: 'flex',
          gap: 4,
          paddingVertical: 10,
        }}
      >
        <Typography size="medium" weight="bold">
          {title}
        </Typography>
        <Typography weight="light">
          {name}
          ,&nbsp;
          {phone}
        </Typography>
        <Typography weight="light" size="small">
          {address}
        </Typography>
      </Card.Content>
    </CardWrapper>
  );
}
