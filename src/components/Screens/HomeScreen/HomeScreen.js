import { ScrollView } from 'react-native';

import Container from '@components/Shared/Container/Container';
import SearchBar from '@components/Shared/SearchBar/SearchBar';
import AdsPromotion from './components/AdsPromotion/AdsPromotion';
import Category from './components/Category/Category';
import CustomCarousel from './components/CustomCarousel/CustomCarousel';
import Popular from './components/Popular/Popular';

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
