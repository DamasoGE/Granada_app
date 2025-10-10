import { StyleSheet } from "react-native";
import React from "react";
import FotoRuta from "./FotoRuta";
import { Tema } from "../themes/Temas";

type Props = {
  tema: Tema;
};

export default function MejoresRutas({tema}: Props) {
  return (
    <>
      <FotoRuta
        texto="Albaicín"
        imagen={require("../assets/images/mejores1.jpg")}
        tema={tema}
      />
      <FotoRuta
        texto="Sacromonte"
        imagen={require("../assets/images/mejores2.jpg")}
        tema={tema}
      />
      <FotoRuta
        texto="El centro"
        imagen={require("../assets/images/mejores3.jpg")}
        tema={tema}
      />
    </>
  );
}

const styles = StyleSheet.create({});
