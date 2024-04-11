import { Button, Text, View } from 'react-native';
import React from 'react';

function FavoriteScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Details', { itemId: 40 })}
        title="Pergi ke halaman detail"
      />
    </View>
  );
}

export default FavoriteScreen;
