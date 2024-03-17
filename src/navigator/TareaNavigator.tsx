import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TareasHomeScreen } from '../screens/Tareas/TareasHomeScreen';
import { TareaFormScreen } from '../screens/Tareas/FormTareasScreen';
import { TareasResponse } from '../interfaces/pandoraApiInterfaces';

export type RootStackTareaParams = {
    TareasHomeScreen: undefined;
    TareaFormScreen: { TareasResponse: TareasResponse };
}

const Stack = createStackNavigator<RootStackTareaParams>();

export const TareaNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen
                component={ TareasHomeScreen }
                name='TareasHomeScreen'
            />
            <Stack.Screen
                component={ TareaFormScreen }
                name='TareaFormScreen'
            />
        </Stack.Navigator>
    );
}

