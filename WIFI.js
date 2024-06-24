import React, {useState} from "react";

import {StyleSheet, Text, View, ActivityIndicator, ImageBackground, StatusBar, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const WIFI = ({navigation}) => {
    const {loading, setLoading} = useState(false);
    return(
            
        <View>
            <Text>BIEN HECHO WIFI</Text>
        </View>

    );
}