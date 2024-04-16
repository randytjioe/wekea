import Container from '@components/Shared/Container';
import { useGlobalAuthProvider } from '@context/AuthContext';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function LoginScreen() {
  const { login } = useGlobalAuthProvider();
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>LoginScreen</Text>
        <Button
          mode="contained"
          onPress={() => login({
            name: 'John Doe', email: 'test@mail.com'
          })}
        >Login
        </Button>
      </View>
    </Container>
  );
}
