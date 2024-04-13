import Container from '@components/Global/Container';
import HStack from '@components/Global/HStack';
import Typography from '@components/Global/Typography';
import VStack from '@components/Global/VStack';
import { Pressable, ScrollView } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import menuData from 'src/const/MenuScreen';
import styled from 'styled-components/native';

const MenuItems = styled.View`
    flex-direction:row;
    align-items:center;
    padding-horizontal:10px;
    gap:10px
`;

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView>
      <Container bgColor="#fff">
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <HStack justify="space-between" align="center">
            <HStack gap="10px" align="center">
              <Avatar.Image
                size={50}
                source={{ uri: 'https://picsum.photos/700' }}
              />
              <VStack>
                <Typography size="large" weight="bold">
                  John Doe
                </Typography>
                <Typography size="small" weight="secondary">
                  Bogor, Indonesia
                </Typography>
              </VStack>
            </HStack>
            <Ionicons name="settings-outline" size={18} color="black" />
          </HStack>
        </Pressable>

        {menuData.map((menu, index) => (
          <VStack key={index} gap="10px">
            <Typography size="medium" weight="bold">
              {menu.title}
            </Typography>
            {menu.menuItems.map((item, i) => (
              <List.Item
                key={i}
                left={() => (
                  <MenuItems>
                    <Ionicons name={item.icon} size={10} color="black" />
                    <Typography>{item.title}</Typography>
                  </MenuItems>
                )}
              />
            ))}
          </VStack>
        ))}
      </Container>
    </ScrollView>
  );
}
