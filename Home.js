import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import {WhiteButton} from './Buttons';
import Cerebro from './assets/EmoStyle.jpg'; //Mandar llamar un objeto por importación no requiere corchetes

export const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ImageBackground source={Cerebro} resizeMode="cover" style={styles.image}>
                <Text style={styles.titulo}>BIENVENIDOS A LA INTERFAZ "ZIGMO"</Text>
                <WhiteButton onPress = {() => navigation.navigate('Enlace')} text = "INGRESAR"/>
            </ImageBackground>
            <StatusBar backgroundColor='#000' barStyle="light-content"/>
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