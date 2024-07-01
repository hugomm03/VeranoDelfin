import React from "react";
import {StyleSheet, Text, View, ImageBackground, StatusBar, Alert, Image} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';

import  {MainStack2}  from "./Index2";

const Stack = createNativeStackNavigator();

export const Enlace1 = ({navigation}) => {
    return(
            
        <View style={styles.container}>

            <MainStack2 /> 

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
