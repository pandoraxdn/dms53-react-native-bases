import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {

    return(
        <View
            style={{
                flex:1,
                backgroundColor: 'red',
                justifyContent: "center"
            }}
        >
            <Text
                style={{
                    paddingHorizontal: 100,
                    paddingVertical: 20,
                    fontSize: 100,
                    marginHorizontal: 20,
                    borderWidth: 10
                }}
            >
                Rodrigo Lazcano
            </Text>
        </View>
    );
}
