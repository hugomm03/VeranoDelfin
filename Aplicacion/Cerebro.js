import React, {useState} from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, IconButton, FAB } from 'react-native-paper';
import axios from 'axios';

import Cerebro3D from './assets/Cerebro.png'; //Mandar llamar un objeto por importación no requiere corchetes
import {INFO} from "./Buttons";


const showAlert = () =>
    Alert.alert(
      'Bienvenid@ A La Interfaz De Comunicación',
      'De acuerdo con las áreas presentadas en el modelo, al presionar los botones se encenderan en el prototipo físico y aparecera un video.',
    );




export const Cerebro = ({navigation}) => {
    const Hablar =  async () =>{
        const data = {name: "Hablar"};
        navigation.navigate('Habla');
        console.log('Se ha presionado el botón de HABLAR');
        try{
            await fetch('http://192.168.100.204:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                  },
                  body: JSON.stringify(data),//(D)
            });
            
            await axios.get('http://192.168.100.204:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
        
    };
    
    
    const Oido = async () =>{
        const data = {name: "Oido"};
        navigation.navigate('Oidos');
        console.log('Se ha presionado el botón de Oido');
        try{
            await fetch('http://192.168.100.204:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.100.204:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    return(
        
        <View style={styles.container}>

            <ImageBackground source={Cerebro3D} resizeMode="contain" style={styles.image}>
            <IconButton icon="account-voice" size={250} onPress={Hablar} />
            <IconButton icon="ear-hearing" size={250} onPress={Oido} />
            <Button buttonColor={'#fff'} onPress={() => {}} style={styles.button}/>
            <INFO onPress = {showAlert}/>
            </ImageBackground>
            
        </View>
            

    );
}
//() => {}
const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
  
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    button: {
        position: 'absolute',
        bottom: 0,
        width: 0.5,

    }
});