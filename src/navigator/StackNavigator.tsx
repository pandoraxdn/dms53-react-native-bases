import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenI } from '../screens/stack/ScreenI';
import { ScreenII } from '../screens/stack/ScreenII';
import { ScreenIII } from '../screens/stack/ScreenIII';
import { PersonaScreen } from '../screens/stack/PersonaScreen';

export type RootStackParams = {
    ScreenI: undefined,
    ScreenII: undefined,
    ScreenIII: undefined,
    PersonaScreen: { id: number, nombre: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='ScreenI'
            screenOptions={{
                headerShown: false,
                headerStyle:{
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen 
                name='ScreenI'
                component={ ScreenI }
                options={{ title:'Página 1' }}
            />
            <Stack.Screen 
                name='ScreenII'
                component={ ScreenII }
                options={{ title:'Página 2' }}
            />
            <Stack.Screen 
                name='ScreenIII'
                component={ ScreenIII }
                options={{ title:'Página 3' }}
            />
            <Stack.Screen 
                name='PersonaScreen'
                component={ PersonaScreen }
                options={{ title:'Detalles del usuario' }}
            />
        </Stack.Navigator>
    );
}
