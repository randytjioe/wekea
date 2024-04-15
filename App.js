/* eslint-disable camelcase */
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

import { GlobalSheetBottom } from '@context/BottomSheetContext';
import CustomSafeArea from './src/components/Shared/CustomSafeArea/CustomSafeArea';
import Routes from './src/routes';

export default function App() {
  LogBox.ignoreAllLogs();

  const [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#000',
      underlineColor: 'transparent',
      background: '#fff',
    },
    roundness: 2
  };
  return (
    <CustomSafeArea>
      <PaperProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <GlobalSheetBottom>
            <Routes />
          </GlobalSheetBottom>
        </GestureHandlerRootView>
      </PaperProvider>
    </CustomSafeArea>
  );
}
