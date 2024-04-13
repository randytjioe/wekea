import { ScrollView } from 'react-native';

import Container from '@components/Global/Container';
import SearchBar from '../../../components/Global/SearchBar';
import AdsPromotion from '../../../components/Home/AdsPromotion';
import Category from '../../../components/Home/Category';
import CustomCarousel from '../../../components/Home/CustomCarousel';
import Popular from '../../../components/Home/Popular';

function HomeScreen() {
  return (
    <ScrollView>
      <Container>
        <SearchBar isHasButton />
        <CustomCarousel />
        <Category />
        <AdsPromotion />
        <Popular />
      </Container>
    </ScrollView>
  );
}

export default HomeScreen;
