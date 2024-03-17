import React from 'react';
import { View, Text } from 'react-native';

interface Persona{
    nombre:string;
    edad:number;
}

let user1:Persona = {
    nombre: "Juan",
    edad: 27
}

const detalle = ( usuario:Persona ):void => {
    console.log(usuario);
}

detalle(user1);

interface User{
    username: string;
    avatar: string;
    email: string;
    location?: string;
}

const detalle_user = ( usuario:User ):void => {
    console.log(`User detail: ${usuario.username} ${usuario.email} ${usuario.avatar}`, (usuario.location) ? usuario.location : '');
}

let mariano:User = {
    username: "mariano",
    avatar: "mariano.png",
    email: "mariano@gmail.com"
}

let joseLuis: User = {
    username: "Jose Luis",
    avatar: "sherlyn.png",
    email: "citlali@gmail.com",
    location: "5 de mayo, Lerma",
}

detalle_user( joseLuis );

detalle_user( mariano );

interface Empleado{
    readonly claveTrabajador: string;
    readonly nombre: string;
    readonly apellido: string;
}

let luis:Empleado = {
    claveTrabajador: "Sys27-1",
    nombre: "Luis",
    apellido: "Dominguez",
}

console.log( luis );

export const Interfaces = () => {

    return(
        <View>
            <Text>
                Interfaces
            </Text>
        </View>
    );
}
