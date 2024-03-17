/*
    En React Native, el "context" se refiere a una 
    característica que permite pasar datos y funcionalidad 
    desde un componente padre a sus componentes hijos, 
    sin tener que pasar propiedades manualmente a través 
    de la jerarquía de componentes. El contexto es 
    especialmente útil cuando se necesita compartir 
    información común, como datos de autenticación, 
    preferencias del usuario o cualquier otro estado global, 
    con varios componentes en la aplicación.

    El contexto en React Native se basa en el concepto 
    de Context API, que también es parte de la biblioteca 
    React. La Context API proporciona dos componentes 
    principales:

    Provider: Este componente permite definir y proporcionar 
              un contexto que contiene los datos y métodos 
              que desea compartir con los componentes hijos.

    Consumer: Los componentes hijos pueden 
              suscribirse al contexto utilizando el 
              componente Consumer. 
              Esto les permite acceder a los datos 
              proporcionados por el Provider en su jerarquía 
              de componentes sin necesidad de pasar props 
              manualmente.
*/
import React,{ createContext, useReducer, ReactNode } from "react";
import { authReducer } from "./authReducer";
import { Input } from "../hooks/useFormHookContext";

// Definir como va trabajar la información en el context
export interface AuthState{
    isLoggenIn: boolean;
    username?: string | undefined;
    favoriteImage?: string | undefined;
    formData: Input[];
}

// Definir estado inicial
export const AuthInicialState:AuthState = {
    isLoggenIn: false,
    username: undefined,
    favoriteImage: undefined,
    formData: [],
}

// Tipo de context que manejaran otros components
export interface AuthContextProps{
    authState: AuthState;
    singIn: () => void;
    changeUserName: ( userName: string ) => void;
    logout: () => void;
    changeFavImage: ( sourceImage: string ) => void;
    formData: ( data: Input[] ) => void;
}

// Crear context
export const AuthContext = createContext( {} as AuthContextProps );

export const AuthProvider = ( { children }: {children: ReactNode} ) => { 

    // Parte reducer, implementar hasta que ya se tenga todo el useContext
    const [ authState, dispatch ] = useReducer(authReducer, AuthInicialState);

    const singIn = () => {
        dispatch({type: "singIn"});
    }

    const logout = () => {
        dispatch({type: "logout"});
    }

    const changeFavImage = ( sourceImage: string ) => {
        dispatch({type:"changeFavImage", payload: sourceImage});
    }

    const changeUserName = ( userName: string ) => {
        dispatch({type:"changeUserName", payload: userName});
    }

    const formData = ( data: Input[] ) => {
        dispatch({ type: "formData", payload: data });
    }

    return(
        <AuthContext.Provider
            value={{
                authState,
                singIn,
                changeFavImage,
                logout,
                changeUserName,
                formData
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}
