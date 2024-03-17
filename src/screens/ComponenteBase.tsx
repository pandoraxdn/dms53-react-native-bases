import React from 'react';
import { View, Text } from 'react-native';

interface Props{
    nombre: string
}

const NombreAlumno = ( {nombre}:Props ) => {
    return (
        <View>
            <Text>
                { nombre }
            </Text>
        </View>
    );
}

export const ComponenteBase = () => {

    const persona = {
        nombre:"Diana"
    }

    return(
        <View>
            <NombreAlumno 
                {...persona}
            />
            <NombreAlumno 
                nombre={persona.nombre}
            />
            <NombreAlumno 
                nombre='Diana'
            />
        </View>
    );
}
