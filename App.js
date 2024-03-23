/*import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Entrada from "./Entrada";
import Visitados from "./Visitados";
import Inicio from "./Inicial";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entrada"
          component={EntradaScreen}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


function EntradaScreen({ navigation }) {
  return <Entrada></Entrada>;
}


function InicioScreen({ navigation }) {
  return <Inicio></Inicio>;
}

function VisitadosScreen({ navigation }) {
  return <Visitados></Visitados>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Navigator initialRouteName="Entrada"/>
      <Tab.Screen name="Entrada" component={MyStack} />
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Visitados" component={VisitadosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entrada from "./Entrada";
import Visitados from "./Visitados";
import Inicio from "./Inicial";
import Cadastro from './Cadastro';


function EntradaScreen() {
  return <Entrada></Entrada>;
}

function VisitadosScreen() {
  return (
    <Visitados></Visitados>
  );
}

function InicioScreen() {
  return (
  <Inicio></Inicio>
  );
}


function CadastroScreen() {
  return (
  <Cadastro></Cadastro>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Entrada">
      <Tab.Screen name="Entrada" component={EntradaScreen} />
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Visitados" component={VisitadosScreen} />
        <Tab.Screen name="Cadastro" component={CadastroScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

