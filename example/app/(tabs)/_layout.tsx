import React from 'react';
import { Tabs } from 'expo-router';

import { CustomHeader } from 'rn-headers';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../../Constants/Colors';

export default function TabLayout() {
  const { top } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: Colors.dark,
        tabBarStyle: { backgroundColor: 'transparent', position: 'absolute' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTransparent: true,
          header: () => <CustomHeader insetTop={top} inputIconName="search" />,
          //   header: () => <Header />,
        }}
      />
    </Tabs>
  );
}
