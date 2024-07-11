import React from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar, TextInput} from 'react-native';
import {WhiteButton} from './Buttons';
import Cerebro from './assets/EmoStyle.jpg'; //Mandar llamar un objeto por importación no requiere corchetes

import {ACEPTAR} from "./Buttons";

export const WIFI = ({navigation}) => {
    //const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>IP RaspberryPi</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Introduce la ip"
                keyboardType="numeric"
            />
                
            <ACEPTAR onPress = {() => navigation.navigate('Enlace')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff' 
      },  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });