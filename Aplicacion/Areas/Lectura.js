import React, {useState, useRef} from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';

import { Video, ResizeMode } from "expo-av";

import LALECTURA from '../assets/LECTURA.mp4';
import { MyREG } from "../Buttons";

export const Lectura = ({navigation, route}) => {
    const video = useRef(null);
    const [state,setState]= useState({hasAutoplayed: false,playing: true});
    const [baseUrl, setBaseUrl]=useState('');

    useFocusEffect(
        React.useCallback(() => {
          const { base } = route.params || {};
          if (base) {
            setBaseUrl(base);
            console.log(base);
          }
        }, [route.params])
    );

    const instance = axios.create({
        baseURL: baseUrl
    });

    const Retorno = async () =>{
        navigation.navigate('Cerebro');
        console.log('Se ha presionado el botón de Retorno');
        try{
            const res = await instance.post('/data',{name: "Retorno"});
            console.log(res.data)

        } catch(error){
            //console.error('Error:', error);
        }
    };

	onStatusUpdate = status => {
		const isPlaying = status.isLoaded && status.isPlaying;

		if ( ! state.hasAutoplayed ) {
			// Wait until playback starts before synching.
			if ( ! isPlaying ) {
				return;
			}

			setState( { hasAutoplayed: true } );
		}

		if ( state.playing !== isPlaying ) {
			setState( { playing: isPlaying } );
		}
	}


    return(
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={LALECTURA}
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
                shouldPlay={ state.playing }
			    onPlaybackStatusUpdate={onStatusUpdate}
            />
            <View style={{flex:1}}>
                <MyREG onPress = {Retorno}/>

            </View>
        </View>
    );
}
//<WhiteButton onPress = {() => navigation.navigate('Enlace')} text = "INGRESAR"/>
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    video:{
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    }
  });