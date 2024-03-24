import { useReducer, useState, useContext } from "react";
import { pandoraApi } from "../api/pandoraApi";

import { RequestLogin } from "../interfaces/pandoraApiInterfaces";
import {AuthContext} from "../context/AuthContext";

export interface LoginData{
    correo: string;
    password: string;
}

const initialLoginData: LoginData = {
    password: "",
    correo: "",
}

type Action = { type: 'handleInputChange', payload: { fieldName: keyof LoginData, value: string } }

const dataReducer = ( state: LoginData, action: Action ) => {
    switch( action.type ){
        case 'handleInputChange':
            return{
                ...state,
                [ action.payload.fieldName ] : action.payload.value
            }
        default:
            return { ...state };
    }
}

export const useLogin = () => {
    const [ loading, setLoading ] = useState<boolean>( true );
    const [ state, dispatch ] = useReducer( dataReducer, initialLoginData );
    const [ request, setRequest ] = useState<RequestLogin>();
    const { singIn, changeUserName, changeFavImage  } = useContext( AuthContext );

    const handleInputChange = ( fieldName: keyof LoginData, value: string ) => {
        dispatch( { type: "handleInputChange", payload: { fieldName, value } } );
    }

    const handleLogin = async () => {
        setLoading( false );
        const apiUrl = 'http://192.168.100.20:3000/api/v1/login';

        const dataBody = {
            correo: state.correo,
            password: state.password,
        }

        try{
            const response = await pandoraApi.post<RequestLogin>( apiUrl, dataBody );
            ( response.data !== false ) && ( () => {
                singIn();
                changeUserName( response.data.nameuser );
                changeFavImage( response.data.image );
                setRequest( response.data );
            })();
        }catch(error){
            console.error( "No se recibieron los parametros solicitados:", error );
            setRequest(false);
        }

        setLoading( true );
    }

    return { loading, state, handleLogin, handleInputChange, request };
}
