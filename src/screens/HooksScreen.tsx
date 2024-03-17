import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { BtnTouch } from '../componets/BtnTouch';
import { appTheme } from '../themes/appTheme';
import { useCounterHook } from './../hooks/useCounterHook';
interface Data{
    count: number;
}

export const HooksScreen = () => {

    const initialValue = (): Data => {
        return { count: 10 };
    }

    const { valor, add, reset, decrement } = useCounterHook( initialValue() );

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text 
                style={appTheme.title}
            >
                Valor Contador Hook: { valor.count }
            </Text>
            <BtnTouch
                title='+'
                action={ add }
                background='blue'
            />
            <BtnTouch
                title='reset'
                action={ reset }
                background='blue'
            />
            <BtnTouch
                title='-'
                action={ decrement }
                background='blue'
            />
        </View>
    );
}
