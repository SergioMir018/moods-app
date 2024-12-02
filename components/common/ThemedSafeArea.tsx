import React from 'react';
import {StyleSheet } from 'react-native';
import { useTheme } from '@/components/common/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ThemedSafeArea({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
