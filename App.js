import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Mapa from "./Mapa";
import Pastelaria from "./Pastelaria";


function PastelariaScreen({ navigation }) {
  return <Pastelaria></Pastelaria>;
}

function MapaScreen({ navigation }) {
  return <Mapa></Mapa>;
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Pastelaria">
        <Drawer.Screen name="Pastelaria" component={PastelariaScreen} />
        <Drawer.Screen name="Mapa" component={MapaScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
