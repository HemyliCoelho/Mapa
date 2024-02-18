import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mapa from "./Mapa";
import Home from "./Home";

function HomeScreen({navigation}) {
  return <Home></Home>
 }

function MapaScreen({ navigation }) {
  return <Mapa></Mapa>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Mapa" component={MapaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}