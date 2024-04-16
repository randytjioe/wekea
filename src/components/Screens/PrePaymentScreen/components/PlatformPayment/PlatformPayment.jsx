import Typography from '@components/Shared/Typography';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CardWrapper from '../CardWrapper';
import usePlatformPayment from './Platform.hooks';

const PaymentWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-width: 1px;
  border-color: gray;
  border-radius: 10px;
  margin: 5px 10px;
`;

export default function PlatformPayment() {
  const { selectedPayment, showBottomSheet } = usePlatformPayment();

  return (
    <CardWrapper
      title="Pembayaran"
      rightContent={() => (
        <Typography onPress={showBottomSheet} size="small">
          Ubah
        </Typography>
      )}
    >
      <PaymentWrapper>
        <Typography size="medium" weight="bold">
          {selectedPayment.label}
        </Typography>
      </PaymentWrapper>
    </CardWrapper>
  );
}
