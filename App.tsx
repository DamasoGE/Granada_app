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
import TEMA from "./themes/Temas";

export default function App() {

  const [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
  });


  const tema = useColorScheme()==="light"? TEMA.light:TEMA.dark;

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
          <Text style={[styles.titulo, { color: tema.COLOR_TITULO }]}>
            ¿Qué hacer en Granada?
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={require("./assets/images/actividad1.jpg")}
              style={styles.fotoCarrusel}
              contentFit="contain"
            />
            <Image
              source={require("./assets/images/actividad2.jpg")}
              style={styles.fotoCarrusel}
              contentFit="contain"
            />
            <Image
              source={require("./assets/images/actividad3.jpg")}
              style={styles.fotoCarrusel}
              contentFit="contain"
            />
            <Image
              source={require("./assets/images/actividad4.jpg")}
              style={styles.fotoCarrusel}
              contentFit="contain"
            />
            <Image
              source={require("./assets/images/actividad5.jpg")}
              style={styles.fotoCarrusel}
              contentFit="contain"
            />
          </ScrollView>
        </View>

        <View style={styles.contenedorSecundario}>
          <Text style={[styles.titulo, { color: tema.COLOR_TITULO }]}>
            Las mejores rutas
          </Text>
          <ImageBackground
            source={require("./assets/images/mejores1.jpg")}
            style={styles.fotoRuta}
          >
            <Text style={[styles.textoFoto, { color: tema.COLOR_TEXTO_FOTO }]}>
              Albaicín
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("./assets/images/mejores2.jpg")}
            style={styles.fotoRuta}
          >
            <Text style={[styles.textoFoto, { color: tema.COLOR_TEXTO_FOTO }]}>
              Sacromonte
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("./assets/images/mejores3.jpg")}
            style={styles.fotoRuta}
          >
            <Text style={[styles.textoFoto, { color: tema.COLOR_TEXTO_FOTO }]}>
              El centro
            </Text>
          </ImageBackground>
        </View>

        <View style={styles.contenedorSecundario}>
          <Text style={[styles.titulo, { color: tema.COLOR_TITULO }]}> Los mejores alojamientos </Text>
          
          <View style={styles.contenedorFotosAlojamiento}>
            <View style={styles.contenedorAlojamiento}>
              <Image
                source={require("./assets/images/alojamiento1.jpg")}
                style={styles.fotoAlojamiento}
              />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image
                source={require("./assets/images/alojamiento2.jpg")}
                style={styles.fotoAlojamiento}
              />
            </View>
          </View>
        
                  <View style={styles.contenedorFotosAlojamiento}>
            <View style={styles.contenedorAlojamiento}>
              <Image
                source={require("./assets/images/alojamiento3.jpg")}
                style={styles.fotoAlojamiento}
              />
            </View>
            <View style={styles.contenedorAlojamiento}>
              <Image
                source={require("./assets/images/alojamiento4.jpg")}
                style={styles.fotoAlojamiento}
              />
            </View>
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
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  fotoCarrusel: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
  },
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
