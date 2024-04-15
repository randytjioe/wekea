import DetailScreen from '@components/Screens/DetailScreen/DetailScreen';
import EditPassword from '@components/Screens/EditPasswordScreen/EditPassword';
import EditProfileScreen from '@components/Screens/EditProfileScreen/EditProfileScreen';
import MenuScreen from '@components/Screens/MenuScreen/MenuScreen';
import PrePaymentScreen from '@components/Screens/PrePaymentScreen';
import ProfileScreen from '@components/Screens/ProfileScreen/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

        <Stack.Group
          screenOptions={({ navigation }) => ({
            headerShown: true,
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        >
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="EditProfile"
            options={{
              title: 'Edit Profile',
            }}
            component={EditProfileScreen}
          />
          <Stack.Screen
            name="EditPassword"
            options={{
              title: 'Edit Password',
            }}
            component={EditPassword}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="PrePayment"
            options={({ navigation }) => ({
              headerShown: true,
              headerTitle: 'Pre Payment',
              headerLeft: () => (
                <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
              ),
            })}
            component={PrePaymentScreen}
          />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
