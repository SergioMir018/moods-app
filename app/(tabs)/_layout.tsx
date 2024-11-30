import TabBar from '@/components/TabBar';
import { Tabs } from 'expo-router';
import React from 'react';
import { Feather } from '@expo/vector-icons';

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
          tabBarIcon: () => {
            return (
              <Feather
                name='home'
                size={24}
                color='black'
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: () => {
            return (
              <Feather
                name='settings'
                size={24}
                color='black'
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
