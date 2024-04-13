import Container from '@components/Global/Container';
import HStack from '@components/Global/HStack';
import Typography from '@components/Global/Typography';
import VStack from '@components/Global/VStack';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { Button, Divider, RadioButton, TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { EDIT_PROFILE_FIELD, initialValues } from 'src/const/EditProfileScreen';

export default function EditProfileScreen({ navigation }) {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      if (!hasUnsavedChanges) return null;
      e.preventDefault();
      Alert.alert(
        'Kamu belum menyimpan perubahan yang kamu buat',
        'Apakah kamu yakin ingin meninggalkan halaman ini?',
        [
          { text: 'Tidak', style: 'cancel', onPress: () => {} },
          { text: 'Keluar', style: 'destructive', onPress: () => navigation.dispatch(e.data.action) },
        ]
      );
      return null;
    });
  }, [hasUnsavedChanges, navigation]);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, dirty }) => {
        setHasUnsavedChanges(dirty);
        return (
          <ScrollView>
            <Container backgroundColor="#fff">
              <VStack gap="20px">
                {EDIT_PROFILE_FIELD.map((item) => (
                  <VStack gap="10px">
                    <Typography weight="bold">{item.label}</Typography>
                    <TextInput
                      key={item.key}
                      disabled={item?.disabled}
                      placeholder={item.label}
                      onChangeText={handleChange(item.key)}
                      onBlur={handleBlur('name')}
                      value={values[item.key]}
                      multiline={item.multiline}
                      mode="outlined"

                    />
                  </VStack>
                ))}

                <VStack gap="10px">
                  <Typography weight="bold">Gender</Typography>
                  <RadioButton.Group
                    onValueChange={handleChange('gender')}
                    value={values.gender}
                  >
                    <HStack>
                      <RadioButton.Item label="Laki-Laki" value="male" />
                      <RadioButton.Item label="Perempuan" value="female" />
                    </HStack>
                  </RadioButton.Group>
                </VStack>

                <VStack gap="10px">
                  <Typography weight="bold"> Tanggal Lahir</Typography>
                  <DatePickerInput
                    presentationStyle="formSheet"
                    value={values.birthdate}
                    onChange={(e) => setFieldValue('birthdate', e)}
                    mode="outlined"

                  />
                </VStack>

                <Button
                  mode="outlined"
                  onPress={handleSubmit}

                >
                  Simpan
                </Button>
              </VStack>
              <Divider style={{ marginVertical: 20 }} />
            </Container>
          </ScrollView>
        );
      }}
    </Formik>
  );
}
