import HStack from '@components/Shared/HStack';
import Typography from '@components/Shared/Typography';
import priceFormatter from '@utils/helpers/priceFormatting';
import { View } from 'react-native';
import CardWrapper from '../CardWrapper';
import usePriceReview from './PriceReview.hooks';

export default function PriceReview({
  totalPrice = 222000
}) {
  const { sortPaymentList } = usePriceReview();
  return (
    <CardWrapper title="Total Harga">
      <View>
        <View style={{ padding: 10, gap: 10 }}>
          {sortPaymentList.map((item) => (
            <HStack
              key={item.key}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography size="small">{item.title}</Typography>
              <Typography size="small">
                {priceFormatter(item.price)}
              </Typography>
            </HStack>
          ))}
        </View>
        <View style={{ padding: 10 }}>
          <HStack justifyContent="space-between" alignItems="center">
            <Typography weight="bold">Total</Typography>
            <Typography weight="bold">
              {priceFormatter(totalPrice)}
            </Typography>
          </HStack>
        </View>
      </View>
    </CardWrapper>
  );
}
