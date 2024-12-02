import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/components/common/ThemeContext';

interface ColorOptionProps {
  children: React.ReactNode;
  color: keyof typeof Colors;
}

export default function ColorOption({ children, color }: ColorOptionProps) {
  const { setTheme } = useTheme();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setTheme(color)}
    >
      <View style={[styles.color, { backgroundColor: Colors[color].tint }]} />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  color: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Outfit',
  },
});
