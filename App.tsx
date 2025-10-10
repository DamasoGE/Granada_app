import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useFonts } from "expo-font";
import TEMAS from "./themes/Temas";
import Titulo from "./components/Titulo";
import Carrusel from "./components/Carrusel";
import FotoRuta from "./components/FotoRuta";
import MejoresRutas from "./components/MejoresRutas";
import FotoAlojamiento from "./components/FotoAlojamiento";

export default function App() {

  const [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
  });


  const tema = useColorScheme()==="light"? TEMAS.light:TEMAS.dark;

  return (
    <View
      style={[styles.contenedorPrincipal, { backgroundColor: tema.COLOR_FONDO }]}
    >
      <ScrollView>
        <Image
          source={require("./assets/images/granada_light.jpg")}
          style={{ width: "100%", height: 250 }}
          contentFit="cover"
        />
        <View style={styles.contenedorSecundario}>
          <Titulo texto="¿Qué hacer en Granada?" tema={tema} />
          <Carrusel />
        </View>

        <View style={styles.contenedorSecundario}>
          <Titulo texto="Las mejores rutas" tema={tema} />
          <MejoresRutas tema={tema} />
        </View>

        <View style={styles.contenedorSecundario}>
          <Titulo texto="Los mejores alojamientos" tema={tema} />
          
          <View style={styles.contenedorFotosAlojamiento}>
            <FotoAlojamiento imagen={require("./assets/images/alojamiento1.jpg")} />
            <FotoAlojamiento imagen={require("./assets/images/alojamiento2.jpg")} />
          </View>

        
          <View style={styles.contenedorFotosAlojamiento}>
            <FotoAlojamiento imagen={require("./assets/images/alojamiento3.jpg")} />
            <FotoAlojamiento imagen={require("./assets/images/alojamiento4.jpg")} />
          </View>
        
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

  contenedorFotosAlojamiento: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    marginBottom: 15,
  },
  fotoAlojamiento: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
    borderRadius: 10,
  },
  contenedorAlojamiento: {
    width: "49%",
    aspectRatio: 1,
  }
});
