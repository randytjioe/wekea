import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '@views/screen/detail/DetailScreen';
import MenuScreen from '@views/screen/menu/MenuScreen';
import EditProfileScreen from '@views/screen/profile/EditProfileScreen';
import ProfileScreen from '@views/screen/profile/ProfileScreen';
import { IconButton } from 'react-native-paper';
import HomeTabs from './tabs';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Main" component={HomeTabs} />
          <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="Menu"
            options={({ navigation }) => ({
              headerShown: true,
              headerLeft: () => (
                <IconButton icon="close" onPress={() => navigation.goBack()} />
              ),
            })}
            component={MenuScreen}
          />
        </Stack.Group>
        <Stack.Group screenOptions={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <IconButton
              icon="arrow-left"
              onPress={() => navigation.goBack()}
            />
          ),
        })}
        >
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
          />
          <Stack.Screen
            name="EditProfile"
            options={() => ({
              title: 'Edit Profile'

            })}
            component={EditProfileScreen}
          />

        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
