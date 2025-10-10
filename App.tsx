import {
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import TEMAS from "./themes/Temas";
import Titulo from "./components/Titulo";
import Carrusel from "./components/Carrusel";
import MejoresRutas from "./components/MejoresRutas";
import MejoresAlojamientos from "./components/MejoresAlojamientos";

export default function App() {


  const tema = useColorScheme() === "light" ? TEMAS.light : TEMAS.dark;

  const carrusel = [
    require("./assets/images/actividad1.jpg"),
    require("./assets/images/actividad2.jpg"),
    require("./assets/images/actividad3.jpg"),
  ];

  const rutas = [
    { nombre: "Albaicín", imagen: require("./assets/images/mejores1.jpg") },
    { nombre: "Sacromonte", imagen: require("./assets/images/mejores2.jpg") },
    { nombre: "El centro", imagen: require("./assets/images/mejores3.jpg") },
    {
      nombre: "Parque García Lorca",
      imagen: require("./assets/images/mejores4.jpg"),
    },
  ];

  const alojamientos = [
    require("./assets/images/alojamiento1.jpg"),
    require("./assets/images/alojamiento2.jpg"),
    require("./assets/images/alojamiento3.jpg"),
    require("./assets/images/alojamiento4.jpg"),
  ];

  return (
    <View
      style={[
        styles.contenedorPrincipal,
        { backgroundColor: tema.COLOR_FONDO },
      ]}
    >
      <ScrollView>
        {useColorScheme() === "light" ? (
          <Image
            source={require("./assets/images/granada_light.jpg")}
            style={{ width: "100%", height: 250 }}
            contentFit="cover"
          />
        ) : (
          <Image
            source={require("./assets/images/granada_dark.jpg")}
            style={{ width: "100%", height: 250 }}
            contentFit="cover"
          />
        )}

        <View style={styles.contenedorSecundario}>
          <Titulo texto="¿Qué hacer en Granada?" tema={tema} />
          <Carrusel listaImagenes={carrusel} />
        </View>

        <View style={styles.contenedorSecundario}>
          <Titulo texto="Las mejores rutas" tema={tema} />
          <MejoresRutas tema={tema} listaRutas={rutas} />
        </View>

        <View style={styles.contenedorSecundario}>
          <Titulo texto="Los mejores alojamientos" tema={tema} />
          <MejoresAlojamientos listaImagenes={alojamientos} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
  },
  contenedorSecundario: {
    marginHorizontal: 10,
    padding: 5,
  },
});
