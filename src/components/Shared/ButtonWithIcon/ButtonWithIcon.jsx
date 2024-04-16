import { Chip } from 'react-native-paper';
import useButtonWithIcon from './ButtonWithIcon.hooks';

export default function ButtonWithIcon({
  icon,
  label,
  mode,
  onPress = () => {},
  variant,
  size,
}) {
  const { variants, sizes, modes } = useButtonWithIcon({ variant, size, mode });
  return (
    <Chip
      icon={icon}
      mode={mode}
      onPress={onPress}
      style={[variants, modes]}
      textStyle={[sizes, modes]}
      theme={{
        colors: {
          primary: modes.color,
        },
      }}
    >
      {label}
    </Chip>
  );
}
