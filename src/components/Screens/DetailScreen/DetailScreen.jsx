import Container from '@components/Shared/Container/Container';
import HStack from '@components/Shared/HStack/HStack';
import Typography from '@components/Shared/Typography/Typography';
import VStack from '@components/Shared/VStack';
import { ScrollView } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import DUMMY_DATA from './DetailScreen.constants';
import { CheckoutButton, StickyBottom } from './DetailScreen.styles';
import CarouselSection from './components/CarouselSection/CarouselSection';
import DescriptionSection from './components/DescriptionSection/DescriptionSection';
import LocationSection from './components/LocationSection/LocationSection';
import PriceSection from './components/PriceSection/PriceSection';
import RatingSection from './components/RatingSection/RatingSection';
import ReviewSection from './components/ReviewSection/ReviewSection';

function DetailScreen({ navigation }) {
  return (
    <>
      <ScrollView>
        <CarouselSection navigation={navigation} data={DUMMY_DATA} />
        <Container>
          <VStack gap="10px">
            <Typography size="xlarge" weight="title">
              {DUMMY_DATA.name}
            </Typography>
            <RatingSection data={DUMMY_DATA} />
            <PriceSection data={DUMMY_DATA} />
            <Divider />
            <DescriptionSection data={DUMMY_DATA} />
            <LocationSection data={DUMMY_DATA} />
            <ReviewSection data={DUMMY_DATA} />
          </VStack>
        </Container>
      </ScrollView>
      <StickyBottom>
        <HStack gap="10px" align="center" justify="space-between">
          <IconButton icon="cart" iconColor="#6c7576" size={25} />
          <CheckoutButton>
            <Typography color="white" weight="bold">
              Beli
            </Typography>
          </CheckoutButton>
        </HStack>
      </StickyBottom>
    </>
  );
}

export default DetailScreen;
