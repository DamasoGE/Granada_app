import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { ImageSourcePropType } from "react-native";

type Carrusel = {
  listaImagenes: Array<ImageSourcePropType>
};

export default function Carrusel({listaImagenes}: Carrusel) {
  return (
    <ScrollView horizontal={true}>
    {listaImagenes.map((imagen, index) => (
      <Image
        key={index}
        source={imagen}
        style={styles.fotoCarrusel}
        contentFit="contain"
      />
    ))}
    
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
