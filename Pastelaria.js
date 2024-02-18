import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Speech from "expo-speech";

const DATA = [
  {
    id: "1",
    title: "pix",
    imageUri:
      "https://s2.glbimg.com/XJP5s9s0EJEpdM-K0yWRmstm06s=/0x0:945x530/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/T/d/9KN7bBSd6UKk4hcitczA/marca-pix-1-.jpg",
  },
  {
    id: "2",
    title: "Cartão",
    imageUri:
      "https://img.elo7.com.br/product/zoom/24B7160/bandeiras-de-cartoes-vetorizadas-mastercard.jpg",
  },
  {
    id: "3",
    title: "dinheiro",
    imageUri:
      "https://media.moneytimes.com.br/uploads/2023/03/dinheiro-esquecido-nos-bancos-saldo-r-120-capa-mt-1024x576.jpg",
  },
];

const Pastelaria = () => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [valor4, setValor4] = useState("");

  let resultado = 0;

  const ShortClick = (item) => {
    resultado = valor1 * 5.3 + valor2 * 4.7 + valor3 * 4 + valor4 * 8;
    if (item.id == 1) {
      alert("o valor a ser pago é de: " + resultado.toFixed(2) + "reais");
      Speech.speak(
        "o valor a ser pago é de: " + resultado.toFixed(2) + "reais"
      );
    } else if (item.id == 2) {
      alert(
        "o valor a ser pago é de: " + (resultado * 1.15).toFixed(2) + "reais"
      );
      Speech.speak(
        "o valor a ser pago é de: " + (resultado * 1.15).toFixed(2) + "reais"
      );
    } else if (item.id == 3) {
      alert(
        "o valor a ser pago é de: " + (resultado * 0.9).toFixed(2) + "reais"
      );
      Speech.speak(
        "o valor a ser pago é de: " + (resultado * 0.9).toFixed(2) + "reais"
      );
    }
  };

  const renderItemNovo = ({ item }) => {
    return (
      <View style={styles.item} key={item.id}>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#86D5C8" : "transparent" },
            styles.title,
          ]}
          onPress={() => {
            ShortClick(item);
          }}
        >
          <View>
            <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Carne"
        keyboardType="decimal-pad"
        onChangeText={(valor1) => setValor1(valor1)}
        value={valor1}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Frango"
        keyboardType="decimal-pad"
        onChangeText={(valor2) => setValor2(valor2)}
        value={valor2}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="queijo"
        keyboardType="decimal-pad"
        onChangeText={(valor3) => setValor3(valor3)}
        value={valor3}
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Vento"
        keyboardType="decimal-pad"
        onChangeText={(valor4) => setValor4(valor4)}
        value={valor4}
        style={styles.input}
      ></TextInput>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItemNovo}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#800080",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#86D5C8",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  itemImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: "#eee",
    borderRadius: 40,
    elevation: 2,
  },
  input: {
    backgroundColor: "#eee",
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
export default Pastelaria;
