import TabBar from '@/components/TabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
