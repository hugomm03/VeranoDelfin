import React, {useState} from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, IconButton, FAB, MD3Colors} from 'react-native-paper';
//import axios from 'axios';

import Cerebro3D from './assets/Cerebro.png'; //Mandar llamar un objeto por importación no requiere corchetes
import {INFO} from "./Buttons";

import { instance } from "./Server";


const showAlert = () =>
    Alert.alert(
      'Bienvenid@ A La Interfaz De Comunicación',
      'De acuerdo con las áreas presentadas en el modelo, al presionar los botones se encenderan en el prototipo físico y aparecera un video.',
    );


export const Cerebro = ({navigation}) => {

    const ControlM = async () =>{
        //const data = {name: "Control"};
        navigation.navigate('Control');
        console.log('Se ha presionado el botón de Control');
        try{
            const res = await instance.post('/data',{name: "Control"});
            console.log(res.data)

        } catch(error){
            //console.error('Error:', error);
        }
    };    

    const ConcentracionP = async () =>{
        //const data = {name: "Concentracion"};
        navigation.navigate('Concentracion');
        console.log('Se ha presionado el botón de Concentración');
        try{
            const res = await instance.post('/data',{name: "Concentracion"});
        } catch(error){
            //console.error('Error:', error);
        }
    };    

    const Hablar =  async () =>{
        //const data = {name: "Hablar"};
        navigation.navigate('Habla');
        console.log('Se ha presionado el botón de HABLAR');
        try{
            const res = await instance.post('/data',{name: "Hablar"});
        } catch(error){
            //console.error('Error:', error);
        }
        
    };
    
    const Olfato = async () =>{
        //const data = {name: "Olfato"};
        navigation.navigate('Olfato');
        console.log('Se ha presionado el botón de Olfato');
        try{
            const res = await instance.post('/data',{name: "Olfato"});
        } catch(error){
            //console.error('Error:', error);
        }
    };
    
    const Oido = async () =>{
        //const data = {name: "Oido"};
        navigation.navigate('Oidos');
        console.log('Se ha presionado el botón de Oido');
        try{
            const res = await instance.post('/data',{name: "Oido"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    const Reconocimiento = async () =>{
        //const data = {name: "Reconocimiento"};
        navigation.navigate('Reconocimiento');
        console.log('Se ha presionado el botón de Reconocimiento');
        try{
            const res = await instance.post('/data',{name: "Reconocimiento"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    const Lectura = async () =>{
        //const data = {name: "Lectura"};
        navigation.navigate('Lectura');
        console.log('Se ha presionado el botón de Lectura');
        try{
            const res = await instance.post('/data',{name: "Lectura"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    
    const Lenguaje = async () =>{
        //const data = {name: "Lenguaje"};
        navigation.navigate('Lenguaje');
        console.log('Se ha presionado el botón de Lenguaje');
        try{
            const res = await instance.post('/data',{name: "Lenguaje"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    const Conciencia = async () =>{
        //const data = {name: "Conciencia"};
        navigation.navigate('Conciencia');
        console.log('Se ha presionado el botón de Conciencia');
        try{
            const res = await instance.post('/data',{name: "Conciencia"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    const Sabor = async () =>{
        //const data = {name: "Sabor"};
        navigation.navigate('Sabor');
        console.log('Se ha presionado el botón de Sabor');
        try{
            const res = await instance.post('/data',{name: "Sabor"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    const Tacto = async () =>{
        //const data = {name: "Tacto"};
        navigation.navigate('Tacto');
        console.log('Se ha presionado el botón de Tacto');
        try{
            const res = await instance.post('/data',{name: "Tacto"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    const Vision = async () =>{
        //const data = {name: "Vision"};
        navigation.navigate('Vision');
        console.log('Se ha presionado el botón de Vision');
        try{
            const res = await instance.post('/data',{name: "Vision"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    const Cerebelo = async () =>{
        //const data = {name: "Cerebelo"};
        navigation.navigate('Cerebelo');
        console.log('Se ha presionado el botón de Cerebelo');
        try{ 
            const res = await instance.post('/data',{name: "Cerebelo"});
        } catch(error){
            //console.error('Error:', error);
        }
    };

    return(
        
        <View style={styles.container}>

            <ImageBackground source={Cerebro3D} resizeMode="contain" style={styles.image}>
                
                <IconButton icon="account-voice" iconColor={MD3Colors.secondary0} size={25} onPress={Hablar} style={styles.bruh} />
                <IconButton icon="smoke" size={25} iconColor={MD3Colors.secondary0} onPress={Olfato} style={styles.bruh1}/>
                <IconButton icon="car" size={25} iconColor={MD3Colors.secondary0} onPress={ControlM} style={styles.bruh2}/>
                <IconButton icon="lightbulb" size={25} iconColor={MD3Colors.secondary0} onPress={ConcentracionP} style={styles.bruh3}/>
                
                <IconButton icon="ear-hearing" size={25} iconColor={MD3Colors.secondary0} onPress={Oido} style={styles.bruh4}/>
                <IconButton icon="face-recognition" size={25} iconColor={MD3Colors.secondary0} onPress={Reconocimiento} style={styles.bruh5}/>
                <IconButton icon="book-open-variant" size={25} iconColor={MD3Colors.secondary0} onPress={Lectura} style={styles.bruh6}/>

                <IconButton icon="format-letter-case" size={25} iconColor={MD3Colors.secondary0} onPress={Lenguaje} style={styles.bruh7}/>
                <IconButton icon="thought-bubble" size={25} iconColor={MD3Colors.secondary0} onPress={Conciencia} style={styles.bruh8}/>
                <IconButton icon="emoticon-tongue" size={25} iconColor={MD3Colors.secondary0} onPress={Sabor} style={styles.bruh9}/>
                <IconButton icon="hand-clap" size={25} iconColor={MD3Colors.secondary0} onPress={Tacto} style={styles.bruh10}/>

                <IconButton icon="eye" size={25} iconColor={MD3Colors.secondary0} onPress={Vision} style={styles.bruh11}/>

                <IconButton icon="walk" size={25} iconColor={MD3Colors.secondary0} onPress={Cerebelo} style={styles.bruh12}/>

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

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        position: 'absolute',
        bottom: 0,
        width: 0.5,
    },
    bruh: {
        //margin: 16,
        left: '25%',
        top: '47%',
    },   
    bruh1: {
        //margin: 16,
        left: '15%',
        top: '47%'  
    },
    bruh2: {
        //margin: 16,
        left: '35%',
        top: '25%'  
    },
    bruh3: {
        //margin: 16,
        left: '10%',
        top: '19%'  
    },
    bruh4: {
        //margin: 16,
        left: '45%',
        top: '18%'  
    },
    bruh5: {
        //margin: 16,
        left: '55%',
        top: '19%'  
    },
    bruh6: {
        //margin: 16,
        left: '60%',
        top: '4%'  
    },
    bruh7: {
        //margin: 16,
        left: '61%',
        top:  '-6%' 
    },
    bruh8: {
        //margin: 16,
        left: '69%',
        top: '-16%'  
    },
    bruh9: {
        //margin: 16,
        left: '41%',
        top: '-20%'  
    },
    bruh10: {
        //margin: 16,
        left: '46%',
        top: '-34%'  
    },
    bruh11: {
        //margin: 16,
        left: '85%',
        top: '-28%'  
    },
    bruh12: {
        //margin: 16,
        left: '65%',
        top: '-25%'  
    }
});