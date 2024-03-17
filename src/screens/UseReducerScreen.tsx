import React from 'react';
import { View, Text } from 'react-native';
import { useCounterReducer } from './../hooks/useCounterReducer';
import { BtnTouch } from '../componets/BtnTouch';
import { appTheme } from '../themes/appTheme';

interface AuthState{
    count: number;
}

export const UseReducerScreen = () => {

    const initialState: AuthState = {
        count: 10,
    }

    const { state, add, decrement, reset } = useCounterReducer(initialState);

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
                Custom Hook useCounterReducer: {state.count}
            </Text>
            <BtnTouch
                title='+'
                action={ add }
                background='green'
            />
            <BtnTouch
                title='reset'
                action={ reset }
                background='green'
            />
            <BtnTouch
                title='-'
                action={ decrement }
                background='green'
            />
        </View>
    )
}
