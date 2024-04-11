import { Platform, StatusBar, StyleSheet } from 'react-native';

export default GlobalStyles = StyleSheet.create({
  safeArrayStyles: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
 