import React from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar, Alert, Image} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';
import { MyFAB, MyBT } from "./Buttons";

import Antena from './assets/Antena.png';
//import  {MainStack1}  from "./Index1";

const Stack = createNativeStackNavigator();

export const Conexion = ({navigation}) => {
    return(
            
        <View style={styles.container}>
            <Text style={styles.titulo}>CONEXIÓN</Text>
            <Image style={styles.imagen} source={Antena}/>
            <MyFAB onPress = {() => navigation.navigate('WIFI')}/>
            <MyBT  onPress = {() => navigation.navigate('BT')}/>
            <Text style={styles.instruccion}>SELECCIONE UNA OPCIÓN PARA REALIZAR LA CONEXIÓN</Text>
           

        </View>
        
    );
}
    //<MainStack1 /> 

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
        marginTop:60,
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