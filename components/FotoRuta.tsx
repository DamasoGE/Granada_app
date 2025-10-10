import { StyleSheet, Text } from "react-native";
import React from "react";
import { ImageBackground } from "expo-image";
import { Tema } from "../themes/Temas";

type Props = {
    texto: string;
    imagen: string;
    tema: Tema;
}

export default function FotoRuta({texto, imagen, tema}: Props) {
  return (
    <ImageBackground
      source={imagen}
      style={styles.fotoRuta}
    >
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
