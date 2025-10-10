import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";

export default function Carrusel() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image
        source={require("../assets/images/actividad1.jpg")}
        style={styles.fotoCarrusel}
        contentFit="contain"
      />
      <Image
        source={require("../assets/images/actividad2.jpg")}
        style={styles.fotoCarrusel}
        contentFit="contain"
      />
      <Image
        source={require("../assets/images/actividad3.jpg")}
        style={styles.fotoCarrusel}
        contentFit="contain"
      />
      <Image
        source={require("../assets/images/actividad4.jpg")}
        style={styles.fotoCarrusel}
        contentFit="contain"
      />
      <Image
        source={require("../assets/images/actividad5.jpg")}
        style={styles.fotoCarrusel}
        contentFit="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fotoCarrusel: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
  },
});
