import { useReducer } from 'react';

interface AuthState{
    count: number;
}

interface UseCounterReducer{
    state: AuthState;
    add: () => void;
    decrement: () => void;
    reset: () => void;
}

type Action =
    | { type: 'add' }
    | { type: 'decrement' }
    | { type: 'reset', payload: { count: number } };

const counterReducer = ( state: AuthState, action: Action ): AuthState => {

    switch ( action.type ){
        case 'add':
            return { count: state.count +1 }
        case 'decrement':
            return { count: (state.count == 0) ? 0 : state.count - 1 };
        case 'reset':
            return { count: action.payload.count }
        default:
            return {...state};
    }
}

export const useCounterReducer = ( initialState: AuthState ): UseCounterReducer => {

    const [ state, dispatch ] = useReducer(counterReducer,initialState);    

    const add = (): void => {
        dispatch({ type: "add" });
    }
    const decrement = (): void => {
        dispatch({ type: "decrement" });
    }

    const reset = (): void => {
        dispatch({ type: "reset", payload: { ...initialState } });
    }

    return { state, add, decrement, reset };
}

