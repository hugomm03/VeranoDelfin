import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Cerebro} from './Cerebro';
import {Habla} from './Habla';
import {Oidos} from './Oidos';

const Stack = createNativeStackNavigator();

export const MainStack2 = () =>{
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                <Stack.Screen 
                    name="Cerebro" 
                    component={Cerebro}
                />

                <Stack.Screen 
                    name="Habla" 
                    component={Habla}
                />
                
                <Stack.Screen 
                    name="Oidos" 
                    component={Oidos}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}