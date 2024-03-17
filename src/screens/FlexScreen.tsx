import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {

    return(
        <View
            style={style.container }
        >
            <View
                style={ style.box1 }
            />
            <View
                style={ style.box2 }
            />
            <View
                style={ style.box3 }
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: 'black',
        flex: 1,
    },
    box1:{
        backgroundColor: "white",
        height: 100,
        width: 100,
        alignSelf: "flex-end"
    },
    box2:{
        backgroundColor: "pink",
        height: 100,
        width: 100,
    },
    box3:{
        backgroundColor: "blue",
        height: 100,
        width: 100,
    }
});

