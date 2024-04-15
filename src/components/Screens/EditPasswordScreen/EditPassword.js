import Container from '@components/Shared/Container/Container';
import Typography from '@components/Shared/Typography/Typography';
import VStack from '@components/Shared/VStack';
import { useFormik } from 'formik';
import { Button, TextInput } from 'react-native-paper';

export default function EditPassword() {
  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container backgroundColor="#fff">
      <VStack gap="20px">
        <VStack gap="10px">
          <Typography weight="bold">Password Lama</Typography>
          <TextInput
            placeholder="Password Lama"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            mode="outlined"
          />
        </VStack>

        <VStack gap="10px">
          <Typography weight="bold">Password Baru</Typography>
          <TextInput
            placeholder="Password Baru"
            onChangeText={formik.handleChange('newPassword')}
            onBlur={formik.handleBlur('newPassword')}
            value={formik.values.newPassword}
            mode="outlined"
          />
        </VStack>
        <VStack gap="10px">
          <Typography weight="bold">Konfirmasi Password Baru</Typography>
          <TextInput
            placeholder="Konfirmasi Password Baru"
            onChangeText={formik.handleChange('confirmPassword')}
            onBlur={formik.handleBlur('confirmPassword')}
            value={formik.values.confirmPassword}
            mode="outlined"
          />
        </VStack>
        <Button mode="outlined" onPress={formik.handleSubmit}>
          Simpan
        </Button>
      </VStack>
    </Container>
  );
}
