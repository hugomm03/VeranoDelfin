import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar, ActivityIndicator, Image, Linking, Loading} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';
import { MyFAB, MyBTOri } from "./Buttons";

import Antena from './assets/Antena.png';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
//import  {MainStack1}  from "./Index1";

const Stack = createNativeStackNavigator();



export const Conexion = ({navigation}) => {
    /*const [loading, setLoading] = useState(false);
    const [name, setName] = useState(null);
    const conectar = async () =>{
        //console.log('Se ha presionado el botón de WIFI');
        //const response = await axios.get('http://192.168.100.204:8000/data');
        try{
            const response = await axios.get('http://192.168.100.204:8000/data');
            console.log(response);
            if (response.status === 200){
                console.log('Se ha presionado el botón de WIFI');
                console.log(response);
            } else {
                console.error('No se ha presionado el botón');
            }
        } catch (error){
            console.error('Error:', error);
            console.log(response);
        }
        //navigation.navigate('WIFI');
    };*/
  
    return(
            
        <View style={styles.container}>
            <Text style={styles.titulo}>CONEXIÓN</Text>
            <Image style={styles.imagen} source={Antena}/>
            <MyFAB onPress = {() => navigation.navigate('Cerebro')}/>
            <MyBTOri onPress = {() => navigation.navigate('Cerebro')}/>
            <Text style={styles.instruccion}>SELECCIONE UNA OPCIÓN PARA REALIZAR LA CONEXIÓN</Text>
        </View>
        
    );//<MyFAB onPress = {conectar}/> 
}

const styles = StyleSheet.create({
    imagen: {
        alignContent: 'center',
        marginTop: 70,
        marginLeft: 80,
        width:250,
        height:300,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    instruccion: {
        fontSize: 20,
        color: '#fff',
        marginTop: 0,
        marginLeft: 16,
        marginRight: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 45,
        color: '#fff',
        marginTop:70,
        textAlign: 'center',
        fontWeight: 'bold',
    }
  });