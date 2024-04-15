import { Text, View } from 'react-native';
import useBadge from './Badge.hooks';
import styles from './Badge.styles';

export default function Badge({ variant, mode, size, label }) {
  const { variants, sizes, modes } = useBadge({ variant, size, mode });
  return (
    <View style={[styles.badge, variants, modes]}>
      <Text style={[variants, sizes, modes]}>{label}</Text>
    </View>
  );
}
