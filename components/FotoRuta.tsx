import { ImageSourcePropType, StyleSheet, Text } from "react-native";
import React from "react";
import { ImageBackground } from "expo-image";
import { Tema } from "../themes/Temas";
import { useFonts } from "expo-font";

type FotoRutaProps = {
  texto: string;
  imagen: ImageSourcePropType;
  tema: Tema;
};

export default function FotoRuta({ texto, imagen, tema }: FotoRutaProps) {
  const [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
  });

  return (
    <ImageBackground source={imagen} style={styles.fotoRuta}>
      <Text style={[styles.textoFoto, { color: tema.COLOR_TEXTO_FOTO }]}>
        {texto}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fotoRuta: {
    width: "100%",
    height: 200,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textoFoto: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 40,
  },
});
