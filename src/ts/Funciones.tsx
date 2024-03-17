
import React from 'react';
import { View, Text } from 'react-native';

const mostrarI = ():void => console.log("hola");

mostrarI();

const mostrarII = ():void => {
    console.log("Función II");
}

mostrarII();

const saludo = ( nombre:string ):void => {
    console.log(`Hola ${nombre}`);
}

saludo("Diana");

const user_info = ( nombre:string, apellido:string, edad?:number ):void => {
    console.log(`User: ${nombre} ${apellido}`, (edad) ? edad : '');
}

user_info( "Diego", "Lopez" );
user_info( "Hamblet", "Lozano", 23 );

const cartaPostres = ( postre: string, ...frutas:string[] ):void => {
    console.log( `${postre} ${frutas}` );
}

cartaPostres( 'Pie de Manzana', "Manzana" );
cartaPostres( 'Pie de Frutas', 'naranja', 'uva', 'fresa', 'mango' );

export const Funciones = () => {

    return(
        <View>
            <Text>
                Funciones
            </Text>
        </View>
    )
}
