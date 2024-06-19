import React from "react"
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

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
    }
})