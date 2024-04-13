import Container from '@components/Global/Container';
import HStack from '@components/Global/HStack';
import Typography from '@components/Global/Typography';
import VStack from '@components/Global/VStack';
import { Avatar, Divider, IconButton as Icon } from 'react-native-paper';

import PROFILE_DATA from 'src/const/data/PROFILE_DATA';
import styled from 'styled-components/native';

const IconButton = styled(Icon)`
    position:absolute;
    right:10px;
`;

const ProfileImage = styled(Avatar.Image)`
    align-self:center;
    margin-top:20px;
`;

const LineDivider = styled(Divider)`
${(props) => props.marginVertical && `margin-vertical: ${props.marginVertical}px`}
`;

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
