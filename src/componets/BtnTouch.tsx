import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props{
    action: () => void;
    background?: string;
    title: string;
}

export const BtnTouch = ( { action, background="pink", title }: Props ) => {

    return(
        <TouchableOpacity
            onPress={ action }
        >
            <View
                style={{
                    ...style.btnCotainer,
                    backgroundColor: background
                }}
            >
                <Text
                    style={ style.btnTitle }
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    btnCotainer:{
        borderRadius: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        justifyContent: "center",
        height: 50,
        width: 120,
    },
    btnTitle:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    }
});

