import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '@/locales/i18';
import { ThemeProvider } from '@/components/common/ThemeContext';
import AppContainer from '@/components/common/AppContainer';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    OutfitLight: require('../assets/fonts/Outfit-Light.ttf'),
    Outfit: require('../assets/fonts/Outfit-Regular.ttf'),
    OutfitSemibold: require('../assets/fonts/Outfit-SemiBold.ttf'),
  });

  useEffect(() => {
    async function hideSplash() {
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
    <ThemeProvider>
      <AppContainer>
        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='themes/theme-selector-view'
            options={{ headerShown: false }}
          />
        </Stack>
        <StatusBar style='auto' />
      </AppContainer>
    </ThemeProvider>
  );
}
