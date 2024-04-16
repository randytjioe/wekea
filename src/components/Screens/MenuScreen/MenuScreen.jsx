import Container from '@components/Shared/Container/Container';
import HStack from '@components/Shared/HStack/HStack';
import Typography from '@components/Shared/Typography/Typography';
import VStack from '@components/Shared/VStack';
import { Pressable, ScrollView } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';

import menuData from './MenuScreen.constants';
import MenuItems from './MenuScreen.styles';

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

        {menuData.map((menu) => (
          <VStack key={Math.random()} gap="10px">
            <Typography size="medium" weight="bold">
              {menu.title}
            </Typography>
            {menu.menuItems.map((item) => (
              <Pressable
                key={Math.random()}
                onPress={item.path ? () => navigation.navigate(item.path) : () => {}}
              >
                <List.Item
                  left={() => (
                    <MenuItems>
                      <Ionicons name={item.icon} size={10} color="black" />
                      <Typography>{item.title}</Typography>
                    </MenuItems>
                  )}
                />
              </Pressable>
            ))}
          </VStack>
        ))}
      </Container>
    </ScrollView>
  );
}
