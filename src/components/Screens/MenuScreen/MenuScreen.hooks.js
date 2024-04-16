import { useGlobalAuthProvider } from '@context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const useMenuScreen = () => {
  const navigation = useNavigation();
  const { logout } = useGlobalAuthProvider();
  const menuData = [
    {
      title: 'Activity',
      menuItems: [
        {
          title: 'Address',
          icon: 'location-outline',
          onPress: () => {},
        },
        {
          title: 'Wishlist',
          icon: 'heart-outline',
          onPress: () => {},
        },

        {
          title: 'Transaction History',
          icon: 'receipt-outline',
          onPress: () => {},
        },
        {
          title: 'Payment Method',
          icon: 'card-outline',
          onPress: () => {},
        },
        {
          title: 'My Cart',
          icon: 'cart-outline',
          onPress: () => {},
        },
      ],
    },
    {
      title: 'Settings',
      menuItems: [
        {
          title: 'Dark Mode',
          icon: 'moon-outline',
          onPress: () => {},
        },
        {
          title: 'Language',
          icon: 'flag-outline',
          onPress: () => {},
        },
        {
          title: 'Help',
          icon: 'help-circle-outline',
          onPress: () => {},
        },
        {
          title: 'Change Password',
          icon: 'lock-closed-outline',
          onPress: () => {
            navigation.navigate('EditPassword');
          },
        },
      ],
    },
    {
      title: 'About',
      menuItems: [
        {
          title: 'About Us',
          icon: 'information-outline',
          onPress: () => {},
        },
        {
          title: 'Privacy Policy',
          icon: 'shield-outline',
          onPress: () => {},
        },
        {
          title: 'Terms & Conditions',
          icon: 'document-text-outline',
          onPress: () => {},
        },
      ],
    },
    {
      title: 'Logout',
      menuItems: [
        {
          title: 'Logout',
          icon: 'log-out-outline',
          onPress: logout,
        },
      ],
    },
  ];
  return { menuData };
};
export default useMenuScreen;
