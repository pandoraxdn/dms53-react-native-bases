import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../themes/appTheme';

export const UseEffectScreen = () => {

    const [ hora, setHora ] = useState( new Date() );
    const [ bgColor, setBgColor ] = useState<string>();

    const colors = [ "pink", "white", "blue", "gray" ];

    const random = () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        setBgColor( color );
    }

    useEffect(() => {
        const interval = setInterval( () => {
            setHora( new Date() );
            return () => clearInterval(interval);
        }, 1000);
        const intervalColor = setInterval( () => {
            random();
            return () => clearInterval(intervalColor);
        }, 500);
    },[]);

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text
                style={{
                    ...appTheme.title,
                    color: bgColor
                }}
            >
                { hora.toLocaleTimeString() }
            </Text>
        </View>
    );
}
