import React from 'react';
import { View } from 'react-native';

export const ComponenteIStyleBase = () => {

    return(
        <View>
            <View
                style={{
                    backgroundColor: "#000000",
                    height:100,
                    width:100,
                    paddingVertical: 10,
                }}
            />
            <View
                style={{
                    backgroundColor: "violet",
                    height:100,
                    width:100,
                    paddingVertical: 10,
                }}
            />
            <View
                style={{
                    backgroundColor: "pink",
                    height:100,
                    width:100,
                    paddingVertical: 10,

                }}
            />
        </View>
    )
}
