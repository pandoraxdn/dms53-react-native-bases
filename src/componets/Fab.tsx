import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props{
    title: string;
    position: 'button_right' | 'button_left';
    onPress: () => void;
}

export const Fab = ( { title, position, onPress }:Props ) => {

    const btnPosition = ( position == 'button_right' )
                        ? style.fabLocationBR
                        : style.fabLocationBL;

    return(
        <TouchableOpacity
            onPress={ onPress }
            style={ btnPosition }
        >
            <View
                style= { style.fab }
            >
                <Text
                    style={ style.fabText }
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    fabLocationBR:{
        position: "absolute",
        botom: 25,
        right: 25
    },
    fabLocationBL:{
        position: "absolute",
        botom: 25,
        left: 25
    },
    fab:{
        backgroundColor: "violet",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: "center"
    },
    fabText:{
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    }
});
