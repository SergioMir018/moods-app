import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface OptionsHeaderTextProps {
  children: React.ReactNode;
}

export default function OptionsHeaderText({ children }: OptionsHeaderTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 26,
    fontFamily: 'OutfitSemibold',
    color: 'white'
  },
});
