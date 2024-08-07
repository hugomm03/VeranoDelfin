import React from "react";
import {View, Text, TouchableOpacity, StyleSheet,Alert} from 'react-native';
import { FAB, Button} from 'react-native-paper';

export function WhiteButton(props){
    const {onPress, text} = props
    return (
        <TouchableOpacity
            style = {{
                ...styles.button,backgroundColor: '#f1f1f1'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export function MyFAB(props){
    const {onPress} = props
    return<FAB
      icon="wifi"
      style={styles.fab}
      onPress={onPress}
      //onPress = {() => navigation.navigate('WIFI')}
      label= "WI-FI"
      color= '#000'
    />
}

export function ACEPTAR(props){
    const {onPress} = props
    return<FAB
      icon="access-point-check"
      style={styles.acept}
      onPress={onPress}
      //onPress = {() => navigation.navigate('WIFI')}
      label= "ACEPTAR"
      color= '#000'
    />
}

export function MyREG(props){
    const {onPress} = props
    return<FAB
      icon="arrow-left-bold"
      style={styles.butreg}
      onPress={onPress}
      //onPress = {() => navigation.navigate('WIFI')}
      //label= "REGRESAR"
      color= '#000'
    />
}

export function INFO(props){
    const {onPress} = props
    return<FAB
      icon="information"
      style={styles.info1}
      onPress={onPress}
      //onPress = {() => navigation.navigate('WIFI')}
      //label= "WI-FI"
      color= '#000'
    />
}

export function MyBT(props){
    const {onPress} = props
    return<FAB
      icon="home"
      style={styles.fab1}
      onPress={onPress}
      //onPress = {() => navigation.navigate('BT')}
      label= "INGRESAR"
      color= '#000'
    />
}

export function MyBTOri(props){
    const {onPress} = props
    return<FAB
      icon="bluetooth"
      disabled
      style={styles.fab2}
      onPress={onPress}
      //onPress = {() => navigation.navigate('BT')}
      label= "BLUETOOTH"
      color= '#000'
    />
}

const styles = StyleSheet.create({
    button:{
        flex: 0.1,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 420,
        marginBottom: 15
        
    },
    buttonText: {
        textAlign:'center',    
        fontWeight: 'bold',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 0,
        width: 165,
        //paddingHorizontal: 28,
        backgroundColor: '#f1f1f1',
    },
    fab1: {
        flex:1,
        position: 'absolute',
        margin: 16,
        right: 75,
        bottom: 70,
        width: 200,
        //paddingHorizontal: 0.1,
        backgroundColor: '#f1f1f1',
    },
    fab2: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        width: 165,
        //paddingHorizontal: 0.1,
        backgroundColor: '#f1f1f1',
    },
    info1:{
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: '#f1f1f1',
    },
    butreg:{
        position: 'absolute',
        margin: 16,
        left: 0,
        top: 0,
        //width: 165,
        //paddingHorizontal: 0.1,
        backgroundColor: '#D6DBDF',
    },
    acept: {
        //flex: 1,
        position: 'absolute',
        margin: 16,
        right: 75,
        top: 560,
        width: 200,
        //paddingHorizontal: 0.1,
        backgroundColor: '#f1f1f1',
    }
})