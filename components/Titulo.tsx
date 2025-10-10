import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Tema } from '../themes/Temas';

type TituloProps = {
    texto: string;
    tema: Tema;
}

export default function Titulo({texto, tema}: TituloProps) {
    

  return (
    <Text style={[styles.titulo, { fontFamily: tema.COLOR_TITULO }]}>
        {texto}
    </Text>
  )
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: "bold",
        fontSize: 24,
        marginVertical: 20,
    }
})