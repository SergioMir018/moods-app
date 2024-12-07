import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface SectionHeaderTextProps {
  children: React.ReactNode;
}

export default function SectionHeaderText({
  children,
}: SectionHeaderTextProps) {
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
    fontSize: 30,
    fontFamily: 'OutfitSemibold',
    color: 'white',
    textAlign: 'center',
  },
});
