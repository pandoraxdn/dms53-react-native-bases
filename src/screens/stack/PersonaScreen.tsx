import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../componets/BtnTouch';

interface Props extends StackScreenProps<RootStackParams, "PersonaScreen">{};

/*
 * No es correcto
interface RouteParams{
    id:number;
    nombre:string;
}
*/

export const PersonaScreen = ( { route, navigation }:Props ) => {

    // No es correcto
    //const params = route.params as RouteParams;

    // Esto si es correcto.
    const params = route.params;

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text
                style={appTheme.title}
            >
                Detalle del usuario
            </Text>
            <Text>
                ID: { params.id }
                { '\n' }
                Nombre: { params.nombre }
                { '\n' }
                { JSON.stringify(params) }
            </Text>
            <BtnTouch
                title='Ir al inicio'
                action={ () => navigation.pop() }
                background='blue'
            />
        </View>
    );
}
