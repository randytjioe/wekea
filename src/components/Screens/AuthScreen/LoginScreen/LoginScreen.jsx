import Container from '@components/Shared/Container';
import HStack from '@components/Shared/HStack';
import Typography from '@components/Shared/Typography';
import VStack from '@components/Shared/VStack';
import { useGlobalAuthProvider } from '@context/AuthContext';
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const { login } = useGlobalAuthProvider();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin = () => {
    login({ email, password });
  };
  return (
    <Container bgColor="white" justifyContent="center">
      <VStack gap="10px">
        <Typography size="xlarge" weight="bold">
          Welcome Back
        </Typography>
        <Typography size="medium" weight="secondary">
          Let&apos;s make your home better
        </Typography>

        <TextInput
          label="Email"
          mode="outlined"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Typography size="medium" weight="primary">
          Forgot your password?
        </Typography>
      </VStack>
      <HStack gap="10px" style={{ marginTop: 20 }}>
        <Typography size="medium" weight="secondary">
          Don&apos;t have an account?
        </Typography>
        <Typography
          size="medium"
          weight="primary"
          onPress={() => navigation.navigate('Register')}
        >
          {' '}
          Register
        </Typography>
      </HStack>

      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </Container>
  );
}
