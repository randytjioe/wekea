import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    borderColor: 'gray',
    padding: 8,
    gap: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  IconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 100,
    height: 50,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: 'gray',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: '#f5f5f5',
  },
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardContainer: {
    width: 150,
    overflow: 'hidden',
    marginRight: 15,
  },
  cardCoverImg: { borderRadius: 0, height: 150 },
  cardTextLabel: {
    fontWeight: '500',
    fontSize: 16,
  },
  pressableComponent: {
    flex: 1,
    height: 100,
    margin: 5,
  },
  imagePressable: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: 'gray',
  },
});

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <View style={[styles.searchBar, styles.borderShadow]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Mau cari barang apa?" />
      </View>
      <IconButton icon="menu" />
    </View>
  );
}
