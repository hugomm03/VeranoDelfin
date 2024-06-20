import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {WIFI} from './WIFI';
import {BT} from './BT';
import {Conexion} from './Conexion';

const Stack = createNativeStackNavigator();

export const MainStack1 = () =>{
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                <Stack.Screen 
                    name="Conexion" 
                    component={Conexion}
                />

                <Stack.Screen 
                    name="WIFI" 
                    component={WIFI}
                />

                <Stack.Screen 
                    name="BT" 
                    component={BT}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}