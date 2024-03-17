import React from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TareasResponse } from '../interfaces/pandoraApiInterfaces';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props{
    tarea: TareasResponse;
}

export const TareasCard = ( { tarea } :Props ) => {

    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    const status = ( tarea: TareasResponse ) => {
        switch( tarea.estado ){
            case 'En proceso':
                return 'gray';
            case 'Completado':
                return 'green';
            case 'Pendiente':
                return 'brown';
            default:
                return 'white';
        }
    }

    return(
        <TouchableOpacity
            key={ `${tarea._id}${tarea.__v}` }
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate('TareaFormScreen',{ TareasResponse: tarea }) }
        >
            <View
                style={{
                    ...styles.cardContainer,
                    backgroundColor: status(tarea),
                    width: width * 0.40,
                }}
            >
                <Text
                    style={ styles.title }
                >
                    { `Título: \n ${tarea.titulo} \n` }
                </Text>
            </View>
            <FontAwesome
                style={ styles.icon }
                name='list-alt'
                size={75}
                color="white"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: "hidden"
    },
    title:{
        marginHorizontal: 15,
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    icon:{
        position: "absolute",
        bottom: 20,
        right: 15,
        opacity: 0.5,
    }
});
