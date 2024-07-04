import React, {useState} from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, IconButton, FAB, MD3Colors} from 'react-native-paper';
import axios from 'axios';

import Cerebro3D from './assets/Cerebro.png'; //Mandar llamar un objeto por importación no requiere corchetes
import {INFO} from "./Buttons";


const showAlert = () =>
    Alert.alert(
      'Bienvenid@ A La Interfaz De Comunicación',
      'De acuerdo con las áreas presentadas en el modelo, al presionar los botones se encenderan en el prototipo físico y aparecera un video.',
    );


export const Cerebro = ({navigation}) => {

    const ControlM = async () =>{
        const data = {name: "Control"};
        navigation.navigate('Control');
        console.log('Se ha presionado el botón de Control');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            fetch('http://192.168.0.117:8000/data', {
                method: 'GET',
            })
            //await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };    

    const ConcentracionP = async () =>{
        const data = {name: "Concentracion"};
        navigation.navigate('Concentracion');
        console.log('Se ha presionado el botón de Concentración');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };    

    const Hablar =  async () =>{
        const data = {name: "Hablar"};
        navigation.navigate('Habla');
        console.log('Se ha presionado el botón de HABLAR');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                  },
                  body: JSON.stringify(data),//(D)
            });
            
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
        
    };
    
    const Olfato = async () =>{
        const data = {name: "Olfato"};
        navigation.navigate('Olfato');
        console.log('Se ha presionado el botón de Olfato');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };
    
    const Oido = async () =>{
        const data = {name: "Oido"};
        navigation.navigate('Oidos');
        console.log('Se ha presionado el botón de Oido');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    const Reconocimiento = async () =>{
        const data = {name: "Reconocimiento"};
        navigation.navigate('Reconocimiento');
        console.log('Se ha presionado el botón de Reconocimiento');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    const Lectura = async () =>{
        const data = {name: "Lectura"};
        navigation.navigate('Lectura');
        console.log('Se ha presionado el botón de Lectura');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    
    const Lenguaje = async () =>{
        const data = {name: "Lenguaje"};
        navigation.navigate('Lenguaje');
        console.log('Se ha presionado el botón de Lenguaje');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    const Conciencia = async () =>{
        const data = {name: "Conciencia"};
        navigation.navigate('Conciencia');
        console.log('Se ha presionado el botón de Conciencia');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    const Sabor = async () =>{
        const data = {name: "Sabor"};
        navigation.navigate('Sabor');
        console.log('Se ha presionado el botón de Sabor');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    const Tacto = async () =>{
        const data = {name: "Tacto"};
        navigation.navigate('Tacto');
        console.log('Se ha presionado el botón de Tacto');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    const Vision = async () =>{
        const data = {name: "Vision"};
        navigation.navigate('Vision');
        console.log('Se ha presionado el botón de Vision');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    const Cerebelo = async () =>{
        const data = {name: "Cerebelo"};
        navigation.navigate('Cerebelo');
        console.log('Se ha presionado el botón de Cerebelo');
        try{
            await fetch('http://192.168.0.117:8000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',//(B)
                },
                body: JSON.stringify(data),//(D)
            });
    
            await axios.get('http://192.168.0.117:8000/data');
        } catch(error){
            console.error('Error:', error);
        }
    };

    return(
        
        <View style={styles.container}>

            <ImageBackground source={Cerebro3D} resizeMode="contain" style={styles.image}>
            <IconButton icon="account-voice" iconColor={MD3Colors.primary100} size={25} onPress={Hablar} style={styles.bruh} />
            <IconButton icon="smoke" size={25} iconColor={MD3Colors.primary100} onPress={Olfato} />
            <IconButton icon="car" size={25} iconColor={MD3Colors.primary100} onPress={ControlM} />
            <IconButton icon="lightbulb" size={25} iconColor={MD3Colors.primary100} onPress={ConcentracionP} />
            
            <IconButton icon="ear-hearing" size={25} iconColor={MD3Colors.primary100} onPress={Oido} />
            <IconButton icon="face-recognition" size={25} iconColor={MD3Colors.primary100} onPress={Reconocimiento} />
            <IconButton icon="book-open-variant" size={25} iconColor={MD3Colors.primary100} onPress={Lectura} />

            <IconButton icon="format-letter-case" size={25} iconColor={MD3Colors.primary100} onPress={Lenguaje} />
            <IconButton icon="thought-bubble" size={25} iconColor={MD3Colors.primary100} onPress={Conciencia} />
            <IconButton icon="emoticon-tongue" size={25} iconColor={MD3Colors.primary100} onPress={Sabor} />
            <IconButton icon="hand-clap" size={25} iconColor={MD3Colors.primary100} onPress={Tacto} />

            <IconButton icon="eye" size={25} iconColor={MD3Colors.primary100} onPress={Vision} />

            <IconButton icon="walk" size={25} iconColor={MD3Colors.primary100} onPress={Cerebelo} />


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
    },
    bruh: {
        //margin: 16,
        left: 100,
        top: 390  
    }
});