import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Link, LinkProps } from 'expo-router';

interface LinkedSectionProps {
  children: React.ReactNode;
  to: LinkProps['href'];
}

export default function LinkedSection({ children, to }: LinkedSectionProps) {
  return (
    <Link
      href={to}
    >
      <View style={styles.container}>
        {children}
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});
