import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, Image, KeyboardAvoidingView, Alert} from 'react-native';

import {ACEPTAR} from "./Buttons";
import RaspberryPi from './assets/Raspberry.png'; //Mandar llamar un objeto por importación no requiere corchetes
import { INFO } from "./Buttons";

const showAlert = () =>
  Alert.alert(
    '¿Cómo saber que IP usar?',
    'Se debe utilizar la IP de la Raspberry Pi y para obtenerla haremos lo siguiente: 1. Conecta la raspberry a un ',
  );

export const WIFI = ({navigation}) => {
    const [number, onChangeNumber] = React.useState('');
 
    return(
        <View style={styles.container}>
          <KeyboardAvoidingView>
              <Text style={styles.titulo}>IP RaspberryPi</Text>
              
              <Image style={styles.imagen} source={RaspberryPi}/>
              <INFO onPress = {showAlert}/>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Introduce la IP: ###.###.###.###"
                keyboardType="numeric"
              />

              <ACEPTAR onPress = {() => navigation.navigate('Cerebro')}/>
          </KeyboardAvoidingView>
        </View>
    );
}

export const IPAdress = () => {
  return number.toString(); // Exporta la función que devuelve el número introducido
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000' 
    },  
    imagen: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 0,
      marginLeft: 0,
      width:300,
      height:240,
      resizeMode: 'contain'
    },
    titulo: {
      fontSize: 45,
      color: '#fff',
      marginTop:70,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    input: {
      height: 50,
      margin: 12,
      top: 0,
      fontSize: 19,
      borderWidth: 1,
      //padding: 15,
      textAlign: "center",
      fontWeight: 'bold',
      backgroundColor: '#fff'
    },
  });