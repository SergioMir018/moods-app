import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from './ThemeContext';

interface ContainerProps {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>,
}

export default function Container({ children, customStyles }: ContainerProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.foreground }, customStyles]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
