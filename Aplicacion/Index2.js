import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Cerebro} from './Cerebro';
import {Habla} from './Areas/Habla';
import {Oidos} from './Areas/Oidos';
import {Control} from './Areas/Control';
import {Concentracion} from './Areas/Concentracion';
import {Olfato} from './Areas/Olfato';
import {Reconocimiento} from './Areas/Reconocimiento';
import {Lectura} from './Areas/Lectura';
import {Lenguaje} from './Areas/Lenguaje';
import {Conciencia} from './Areas/Conciencia';
import {Sabor} from './Areas/Sabor';
import {Tacto} from './Areas/Tacto';
import {Vision} from './Areas/Vision';
import {Cerebelo} from './Areas/Cerebelo';

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

                <Stack.Screen 
                    name="Control" 
                    component={Control}
                />

                <Stack.Screen 
                    name="Concentracion" 
                    component={Concentracion}
                />

                <Stack.Screen 
                    name="Olfato" 
                    component={Olfato}
                />

                <Stack.Screen 
                    name="Reconocimiento" 
                    component={Reconocimiento}
                />

                <Stack.Screen 
                    name="Lectura" 
                    component={Lectura}
                />

                <Stack.Screen 
                    name="Lenguaje" 
                    component={Lenguaje}
                />

                <Stack.Screen 
                    name="Conciencia" 
                    component={Conciencia}
                />

                <Stack.Screen 
                    name="Sabor" 
                    component={Sabor}
                />

                <Stack.Screen 
                    name="Tacto" 
                    component={Tacto}
                />

                <Stack.Screen 
                    name="Vision" 
                    component={Vision}
                />

                <Stack.Screen 
                    name="Cerebelo" 
                    component={Cerebelo}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}//