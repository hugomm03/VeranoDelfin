import {React,useState, useRef} from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';

import { Video, ResizeMode } from "expo-av";

import ElHabla from './assets/ElHabla.mp4';


export const Habla = ({navigation}) => {
    const video = useRef(null);
    const [status,setStatus]= useState({});
    return(
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={ElHabla}
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />


        </View>
    );
}
//<WhiteButton onPress = {() => navigation.navigate('Enlace')} text = "INGRESAR"/>
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video:{
        //alignSelf: 'center',
        //margin: 16,
        width: 384,
        height: 756,
    }
  });