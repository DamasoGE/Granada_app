import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

type Props = {
    imagen: string;
};

export default function FotoAlojamiento({imagen}: Props) {
  return (
    <View style={styles.contenedorAlojamiento}>
      <Image
        source={imagen}
        style={styles.fotoAlojamiento}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorAlojamiento: {
    width: "49%",
    aspectRatio: 1,
  },
  fotoAlojamiento: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
    borderRadius: 10,
  },
});
