import Container from '@components/Shared/Container';
import HStack from '@components/Shared/HStack';
import Typography from '@components/Shared/Typography';
import VStack from '@components/Shared/VStack';
import { Button, TextInput } from 'react-native-paper';

export default function RegisterScreen({ navigation }) {
  return (
    <Container bgColor="white" justifyContent="center">
      <VStack gap="10px">
        <Typography size="xlarge" weight="bold">
          Create an account
        </Typography>
        <Typography size="medium" weight="secondary">
          Join us and make your home better
        </Typography>

        <TextInput
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry
        />
      </VStack>
      <HStack>
        <Typography size="medium" weight="secondary">
          Already have an account?
        </Typography>
        <Typography
          size="medium"
          weight="primary"
          onPress={() => navigation.navigate('Login')}
        >
          {' '} Login
        </Typography>
      </HStack>

      <Button mode="contained" onPress={{}}>
        Register
      </Button>
    </Container>
  );
}
