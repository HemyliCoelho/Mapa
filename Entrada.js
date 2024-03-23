import * as React from "react";
import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Inicio() {
  return (
  <Inicio></Inicio>
  );
}

function Cadastro() {
  return (
  <Cadastro></Cadastro>
  );
}

export default function Entrada() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("./DestinoTrans.png")}
        style={styles.DestinoTraçado}
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </Pressable>
    </View>
  );
};


export { Entrada, Inicio, Cadastro};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  DestinoTraçado: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
