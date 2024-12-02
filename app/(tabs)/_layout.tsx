import TabBar from '@/components/common/TabBar';
import { useTheme } from '@/components/common/ThemeContext';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: colors.background
        }
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          animation: 'shift',
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          animation: 'shift',
        }}
      />
    </Tabs>
  );
}
