import React, {useState} from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput, Image, KeyboardAvoidingView, Alert, ActivityIndicator} from 'react-native';

import {ACEPTAR} from "./Buttons";
import RaspberryPi from './assets/Raspberry.png'; //Mandar llamar un objeto por importación no requiere corchetes
import { INFO } from "./Buttons";
//import { useNavigation } from "@react-navigation/native";

const showAlert = () =>
  Alert.alert(
    '¿Cómo saber que IP usar?',
    'Se debe utilizar la IP de la Raspberry Pi y para obtenerla haremos lo siguiente: \n1. Conectar a la Raspberry Pi un mouse, un monitor y alimentarlo a la luz. \n2. Una vez encendida colocar el cursor encima del signo de WIFI.\n3. Ahí aparecera la IP, ahora solo introducela en el recuadro.',
  );

export const WIFI = ({navigation}) => {
    const [number, onChangeNumber] = React.useState('');
    const [loading, setLoading] = useState(false);
    //const naviga = useNavigation();
    const validateIp = (ip) => {
      const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      return ipPattern.test(ip);
    };

    const handleAccept = () => {
      if (validateIp(number)) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Cerebro', { ip: number });
        }, 2000); // Simulate a loading delay of 2 seconds
      } else {
        Alert.alert('Error', 'Por favor, introduce una IP válida: ###.###.###.###');
      }
    };

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
              {loading ? (
                <ActivityIndicator size="500" color="#fff" style={styles.indicador}/>
              ) : (
                <ACEPTAR onPress={handleAccept} />
              )}
          </KeyboardAvoidingView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000' 
    },  
    indicador:{
      flex:1,
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 160
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