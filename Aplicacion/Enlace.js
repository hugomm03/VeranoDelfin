import React from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar, Alert, Image} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';

import  {MainStack1}  from "./Index1";

const Stack = createNativeStackNavigator();

export const Enlace = ({navigation}) => {
    return(
            
        <View style={styles.container}>

            <MainStack1 /> 

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
