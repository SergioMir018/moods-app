import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

interface ColorOptionProps {
  children: React.ReactNode;
  color: keyof typeof Colors;
}

export default function ColorOption({ children, color }: ColorOptionProps) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.color,
          { backgroundColor: Colors[color].tint },
        ]}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  color: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Outfit'
  }
});
