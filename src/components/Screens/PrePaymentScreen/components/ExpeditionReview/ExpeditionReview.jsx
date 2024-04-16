import Typography from '@components/Shared/Typography';
import VStack from '@components/Shared/VStack';
import priceFormatter from '@utils/helpers/priceFormatting';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CardWrapper from '../CardWrapper';
import useExpeditionReview from './ExpeditionReview.hooks';

const ExpeditionWrapper = styled(View)`
    flex-direction: row;
    align-items:center;
    justify-content : space-between;
    padding : 10px;
    border-width:1px;
    border-color:gray;
    border-radius:10px;
    margin:5px 10px;
`;

export default function ExpeditionReview() {
  const { selectedExpedition, showBottomSheet } = useExpeditionReview();

  return (
    <CardWrapper
      title="Ekspedisi"
      rightContent={() => (
        <Typography onPress={showBottomSheet} size="small">
          Ubah
        </Typography>
      )}
    >
      <ExpeditionWrapper>
        <VStack gap={5}>
          <Typography size="medium" weight="bold">
            {selectedExpedition.label}
          </Typography>
          <Typography size="small" weight="secondary">
            {selectedExpedition.duration} Hari
          </Typography>
        </VStack>
        <Typography size="medium" weight="bold">
          {priceFormatter(selectedExpedition.price)}
        </Typography>
      </ExpeditionWrapper>
    </CardWrapper>
  );
}
