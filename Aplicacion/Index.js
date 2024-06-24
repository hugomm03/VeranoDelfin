import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from './Home';
//import {Conexion} from './Conexion'; //Mandar llamar una libreria, una exportación y una importación requieren corchetes
import {Enlace} from './Enlace'; //Mandar llamar una libreria, una exportación y una importación requieren corchetes

const Stack = createNativeStackNavigator();

export const MainStack = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                <Stack.Screen 
                    name="Home" 
                    component={Home}
                />

                <Stack.Screen 
                    name="Enlace" 
                    component={Enlace}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}

/*<Stack.Screen 
name="Conexion" 
component={Conexion}
/>*/