import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PositionScreen = () => {

    return(
        <View
            style={style.container}
        >
            <View
                style={style.cajaVerde}
            />
            <View
                style={style.cajaMorada}
            />
            <View
                style={style.cajaNaranja}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: 'violet',
        borderWidth: 10,
        borderColor: "white",
        top: 0,
        right: 0
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: "white",
        bottom: 0,
        right: 0
    },
    cajaVerde:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: "white",
        bottom: 0,
        left: 0
    }
});

