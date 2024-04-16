import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import {
  IconButton,
  Searchbar as Search,
  TouchableRipple,
} from 'react-native-paper';
import styles from './SearchBar.styles';

export default function SearchBar({ isHasButton }) {
  const navigation = useNavigation();
  return (
    <View style={styles.searchBarContainer}>
      <Search
        style={[
          styles.inputWrapper,
          {
            flex: 1,
          },
        ]}
        placeholder="Mau cari apa?"
        theme={{ roundness: 2 }}
      />
      {isHasButton && (
        <TouchableRipple
          onPress={() => navigation.navigate('Menu')}
          style={[
            styles.inputWrapper,
            {
              justifyContent: 'center',
            },
          ]}
        >
          <IconButton icon="menu" />
        </TouchableRipple>
      )}
    </View>
  );
}
