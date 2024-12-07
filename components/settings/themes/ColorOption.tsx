import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Theme } from '@/constants/Colors';
import { useTheme } from '@/components/common/ThemeContext';
import Feather from '@expo/vector-icons/Feather';

interface ColorOptionProps {
  children: React.ReactNode;
  color: keyof typeof Theme;
}

export default function ColorOption({ children, color }: ColorOptionProps) {
  const { theme, setTheme } = useTheme();

  const isSelectedTheme = () => {
    return theme === color;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setTheme(color)}
    >
      <View style={styles.colorInfoContainer}>
        <View
          style={[styles.color, { backgroundColor: Theme[color].highlight }]}
        />
        <Text style={styles.text}>{children}</Text>
      </View>
      {isSelectedTheme() && (
        <Feather
          name='check'
          color='white'
          size={26}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  colorInfoContainer: {
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
    color: 'white',
  },
});
