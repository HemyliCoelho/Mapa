import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
