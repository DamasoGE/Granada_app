import { ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import FotoAlojamiento from "./FotoAlojamiento";

type MejoresAlojamientosProps = {
  listaImagenes: Array<ImageSourcePropType>;
};

export default function MejoresAlojamientos({
  listaImagenes,
}: MejoresAlojamientosProps) {
  return (
    <View style={styles.contenedorFotosAlojamiento}>
      {listaImagenes.map((imagen, index) => (
        <FotoAlojamiento key={index} imagen={imagen} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorFotosAlojamiento: {
    flexDirection: "row",
    flexWrap: "wrap", //añadido para que pueda haber varias filas
    gap: 5,
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
