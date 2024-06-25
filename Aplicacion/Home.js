import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import {WhiteButton} from './Buttons';
import Cerebro from './assets/EmoStyle.jpg'; //Mandar llamar un objeto por importación no requiere corchetes

import {MyBT} from "./Buttons";

export const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ImageBackground source={Cerebro} resizeMode="cover" style={styles.image}>
                <Text style={styles.titulo}>PROTOTIPO DIDÁCTICO CEREBRAL</Text>
                <MyBT onPress = {() => navigation.navigate('Enlace')}/>
            </ImageBackground>
            <StatusBar backgroundColor='#000' barStyle="light-content"/>
        </View>
    );
}
//<WhiteButton onPress = {() => navigation.navigate('Enlace')} text = "INGRESAR"/>
const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
    },
  
    container: {
      flex: 1,
    },
  
    titulo: {
      fontSize: 30,
      color: '#fff',
      bottom: 250,
      textAlign: 'center',
      fontWeight: 'bold',
    }
  });