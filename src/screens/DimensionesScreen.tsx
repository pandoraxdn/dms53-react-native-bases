
import React from 'react';
import { View, Text, StyleSheet ,useWindowDimensions } from 'react-native';

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return(
        <View
            style={style.container}
        >
            <View
                style={{
                    ...style.cajaMorada,
                    width: width * 0.6
                }}
            />
            <Text
                style={ style.title }
            >
                W: {width} H: {height}
            </Text>
        </View>
    )
}

const style  = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'violet',
    },
    cajaMorada:{
        backgroundColor: '#5856D6',
        height: '50%'
    },
    cajaNaranja:{
        backgroundColor: '#F0A23B',
    },
    title:{
        fontSize: 30,
        textAlign: "center"
    }
});
