import React, {useReducer} from 'react';
import { View, Text } from 'react-native';
import { BtnTouch } from '../componets/BtnTouch';
import { appTheme } from '../themes/appTheme';

interface AuthState{
    count: number;
}

const initalState: AuthState = {
    count: 10,
}

type Action = 
    | { type: 'add' } 
    | { type: 'decrement' }
    | { type: 'reset' };

const counterReducer = ( state: AuthState, action: Action ): AuthState => {
    switch ( action.type ){
        case 'add':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: (state.count == 0) ? 0 : state.count - 1  };
        case 'reset':
            return { count: initalState.count };
        default:
            return {...state};
    }
}

export const CounterReducerScreen = () => {

    const [ state, dispatch ] = useReducer(counterReducer,initalState);

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
                Contador Reducer { state.count }
            </Text>
            <BtnTouch
                title='+'
                action={ () => dispatch({ type: "add" }) }
                background='violet'
            />
            <BtnTouch
                title='reset'
                action={ () => dispatch({ type: "reset" }) }
                background='violet'
            />
            <BtnTouch
                title='-'
                action={ () => dispatch({ type: "decrement" }) }
                background='violet'
            />
        </View>
    )
}
