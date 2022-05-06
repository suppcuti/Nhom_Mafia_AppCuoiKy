import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

import GameController from '../Class/DieuKhien';

export default function Game2048() {
  return (
    <View style={styles.container}>
      <GameController />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  }
});
