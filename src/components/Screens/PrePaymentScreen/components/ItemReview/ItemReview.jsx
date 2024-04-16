import HStack from '@components/Shared/HStack';
import Typography from '@components/Shared/Typography';
import VStack from '@components/Shared/VStack';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import CardWrapper from '../CardWrapper';
import useItemReview from './ItemReview.hooks';

const StyledCardWrapper = styled(Card)`
    margin:10px;
    border-radius:10px;
    background-color:#fff;
`;

const ImageComponent = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export default function ItemReview() {
  const { animatedStyles, handlePress, isShow, itemsMap } = useItemReview();
  return (
    <CardWrapper title="Review Pesanan">
      <Animated.View style={[animatedStyles]}>
        {itemsMap.map((item) => (
          <StyledCardWrapper>
            <HStack
              gap={10}
              justifyContent="space-between"
              padding={10}
              alignItems="center"
            >
              <HStack gap={10} alignItems="center">
                <ImageComponent source={{ uri: item.imageUrl }} />
                <VStack>
                  <Typography size="medium" weight="bold" maxWidth={100}>
                    {item.title}
                  </Typography>

                  <Typography size="small" weight="light">
                    {item.quantity}
                    &nbsp;Barang
                  </Typography>
                </VStack>
              </HStack>
              <Typography size="medium" weight="bold">
                {item.price}
              </Typography>
            </HStack>
          </StyledCardWrapper>
        ))}
      </Animated.View>
      {itemsMap.length > 1 && (
        <Typography size="small" onPress={handlePress}>
          {isShow ? 'Tutup' : 'Lihat Semua'}
        </Typography>
      )}
    </CardWrapper>
  );
}
