import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";

export default function Home() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="satellite"
        initialRegion={{
          latitude: -31.32752719926015,
          longitude: -53.98112947318347,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <Marker
          coordinate={{
            latitude: -31.33199,
            longitude: -54.07184,
          }}
          title={"IFSUL campus Bagé"}
          description={"filhote do de pelotas."}
        ></Marker>

        <Marker
          coordinate={{
            latitude: -31.30573,
            longitude: -54.0646,
          }}
          title={"Universidade Federal do Pampa"}
          description={"Até que é acessivel."}
        ></Marker>

        <Marker
          coordinate={{
            latitude: -31.23959,
            longitude: -53.8841,
          }}
          title={"Faculdade IDEAU - Bagé"}
          description={"Nunca conheci alguem que fosse de lá."}
        ></Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
