import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Alert} from 'react-native';
import {WhiteButton} from './Buttons';

export default function App() {

  const image = {uri:'https://i.pinimg.com/originals/19/09/1d/19091d5343b1e1e4b9f913be4b3d3fb8.jpg'}

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titulo}>BIENVENIDOS A LA INTERFAZ "ZIGMO"</Text>
        <WhiteButton onPress = {() => alert('BIENVENID@ A LA INTERFAZ ZIGMO')} text = "INGRESAR"/>
      </ImageBackground>
      <StatusBar backgroundColor='#fff' barStyle="auto"/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
  },

  titulo: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});