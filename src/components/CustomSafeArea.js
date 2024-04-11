import { SafeAreaView } from 'react-native';
import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

export default function CustomSafeArea({ children }) {
  return (
    <SafeAreaView style={GlobalStyles.safeArrayStyles}>{children}</SafeAreaView>
  );
}
