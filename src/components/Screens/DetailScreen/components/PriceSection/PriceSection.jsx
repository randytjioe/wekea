import HStack from '@components/Shared/HStack/HStack';
import Typography from '@components/Shared/Typography/Typography';
import VStack from '@components/Shared/VStack';
import priceFormatter from '@utils/helpers/priceFormatting';
import DiscountWrapper from './PriceSection.styles';

export default function PriceSection({ data }) {
  return (
    <HStack gap="5px" align="center" justify="space-between">
      <VStack>
        {data?.isDiscount && (
          <Typography size="large" color="secondary" lineThrough>
            {priceFormatter(data?.price)}
          </Typography>
        )}

        <Typography size="xlarge" weight="bold">
          {priceFormatter(
            data?.isDiscount
              ? data?.discountPrice
              : data?.price
          )}
        </Typography>
      </VStack>
      {data?.isDiscount && (
        <DiscountWrapper>
          <Typography color="white">
            -{data?.discountPercentage}%
          </Typography>
        </DiscountWrapper>
      )}
    </HStack>
  );
}
