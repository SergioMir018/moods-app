import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

interface ViewHeaderProps {
  children: React.ReactNode;
}

export default function ViewHeader({ children }: ViewHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleBack}
        style={{ zIndex: 10 }}
      >
        <Feather
          name='arrow-left'
          size={28}
          color='white'
        />
      </TouchableOpacity>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1 / 4,
    flexDirection: 'row',
    paddingVertical: 5,
    marginBottom: 10,
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: 'white',
  },
});
