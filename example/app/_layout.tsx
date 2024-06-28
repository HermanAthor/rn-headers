import * as React from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'black' }}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: 'Home' }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
