import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import {Cerebro} from './Cerebro';
import {Conexion} from './Conexion';
import { Enlace1 } from "./Enlace1";

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
                    name="Enlace1" 
                    component={Enlace1}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}