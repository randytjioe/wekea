import CartScreen from '@components/Screens/CartScreen';
import DiscoverScreen from '@components/Screens/DiscoverScreen';
import HomeScreen from '@components/Screens/HomeScreen';
import TransactionScreen from '@components/Screens/TransactionScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  const tabsMap = [
    {
      name: 'Home',
      component: HomeScreen,
      icon: 'home',
      iconOutline: 'home-outline',
    },
    {
      name: 'Discover',
      component: DiscoverScreen,
      icon: 'map',
      iconOutline: 'map-outline',
    },
    {
      name: 'Cart',
      component: CartScreen,
      icon: 'cart',
      iconOutline: 'cart-outline',
    },
    {
      name: 'Transactiom',
      component: TransactionScreen,
      icon: 'receipt',
      iconOutline: 'receipt-outline',
    },
  ];
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 50,
        },
      }}
    >

      {tabsMap.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? tab.icon : tab.iconOutline}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}

    </Tabs.Navigator>
  );
}
