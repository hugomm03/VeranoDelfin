import {React,useState, useRef} from "react";
import { StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';

import { Video, ResizeMode } from "expo-av";

import ElOir from '../assets/ELOIDO.mp4';
import { MyREG } from "../Buttons";

export const Oidos = ({navigation}) => {
    const video = useRef(null);
    const [state,setState]= useState({hasAutoplayed: false,playing: true});


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
                source={ElOir}
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
                shouldPlay={ state.playing }
			    onPlaybackStatusUpdate={onStatusUpdate}
            />
            <View style={{flex:1}}>
                <MyREG onPress = {() => navigation.navigate('Cerebro')}/>

            </View>
        </View>
    );
}

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