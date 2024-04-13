import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import {
  IconButton,
  Searchbar as Search,
  TouchableRipple,
} from 'react-native-paper';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'strech',
    gap: 10,
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

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
