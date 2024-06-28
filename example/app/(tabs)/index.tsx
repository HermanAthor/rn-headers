import * as React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function App() {
  const result: number = 23;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Result: {result}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
