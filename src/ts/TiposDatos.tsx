
import React from 'react';
import { View, Text } from 'react-native';

const nombre:string = 'Rodrigo';
let edad:number|string = 27;

console.log( nombre, edad );

edad = "28";

let si:boolean = true;
let no:boolean = false;

console.log( (si) ? 'Verdadero' : 'Falso', no );

let arr_number: number[] = [1,2,3,4,5];
let arr_string: string[] = ["a","b","c"];

let coleccion_a: Array<number> = [1,2,3];
let collecion_b: Array<string> = ["a","b"];

console.log( arr_number, arr_string, coleccion_a, collecion_b );

let tuple: [number,string,boolean] = [ 10, "Mariana", true ];

console.log(tuple);

export const TiposDatos = () => {

    return(
        <View>
            <Text>
                Tipos de Datos TS
            </Text>
        </View>
    )
}
