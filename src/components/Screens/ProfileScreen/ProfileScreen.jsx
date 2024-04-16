import Container from '@components/Shared/Container/Container';
import HStack from '@components/Shared/HStack/HStack';
import Typography from '@components/Shared/Typography/Typography';
import VStack from '@components/Shared/VStack';
import { Divider, IconButton } from 'react-native-paper';
import PROFILE_DATA from './ProfileScreen.constants';
import { LineDivider, ProfileImage } from './ProfileScreen.styles';

export default function ProfileScreen({ navigation }) {
  return (
    <Container backgroundColor="#fff">
      <IconButton
        icon="pencil"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ProfileImage
        size={75}
        source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}

      />
      <LineDivider marginVertical="20px" />
      {PROFILE_DATA.map((item) => (
        <>
          <ProfileData title={item.title} data={item.data} />
          <Divider />
        </>
      ))}
    </Container>
  );
}

function ProfileData({ title, data }) {
  return (
    <VStack gap="20px">
      <Typography size="large" weight="bold">
        {title}
      </Typography>

      {data?.map((item) => (
        <HStack gap="10px">
          <Typography
            size="medium"
            weight="bold"
            minWidth={150}
          >
            {item?.label}
          </Typography>
          <Typography
            flex={1}
          >
            {item?.value}
          </Typography>
        </HStack>
      ))}
    </VStack>
  );
}
