import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import '@/locales/i18';
import { ThemeProvider, useTheme } from '@/components/common/ThemeContext';
import * as SystemUI from 'expo-system-ui';
import { Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    OutfitLight: require('../assets/fonts/Outfit-Light.ttf'),
    Outfit: require('../assets/fonts/Outfit-Regular.ttf'),
    OutfitSemibold: require('../assets/fonts/Outfit-SemiBold.ttf'),
  });

  return (
    <ThemeProvider>
      <RootStack loaded={loaded} />
      <StatusBar style='light' />
    </ThemeProvider>
  );
}

function RootStack({ loaded }: { loaded: boolean }) {
  const { colors } = useTheme();

  useEffect(() => {
    async function hideSplash() {
      SystemUI.setBackgroundColorAsync(colors.background);
      setStatusBarBackgroundColor(colors.background);

      if (loaded) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplash();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name='(tabs)'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='themes/theme-selector-view'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
