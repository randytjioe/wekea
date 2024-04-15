import { ScrollView, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import Typography from '@components/Shared/Typography/Typography';

export default function Category() {
  const styles = StyleSheet.create({
    IconButton: {
      margin: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      width: 100,
      height: 50,
    },
  });
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(Array(5)).map(() => (
          <IconButton
            icon={({ color, size }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Ionicons name="home-outline" size={size} color={color} />
                <Typography size="small"> Home</Typography>
              </View>
            )}
            style={styles.IconButton}
          />
        ))}
      </ScrollView>
    </View>
  );
}
