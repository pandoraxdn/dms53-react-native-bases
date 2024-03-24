import { useReducer } from 'react';
import { useUsuariosApi } from './useUsuariosApi';

export interface FormUserData{
    id_user:  number | string;
    nameuser: string;
    password: string;
    image:    string;
    correo:   string;
}

export const initialUseStateForm: FormUserData = {
    id_user: "",
    nameuser: "",
    password: "",
    image: "",
    correo: ""
}

type Action = 
    { type: "handleInputChange", payload: { fieldName: keyof FormUserData, value: string | number } };

const formReducer = ( state: FormUserData, action: Action ) => {
    switch( action.type ){
        case 'handleInputChange':
            return {
                ...state,
                [ action.payload.fieldName ] : action.payload.value,
            };
        default:
            return { ...state };
    }
}

export const useFormUsuarios = () => {

    const [ state, dispatch ] = useReducer( formReducer, initialUseStateForm );

    const { 
        createUsuario, 
        updateUsuario, 
        deleteUsuario, 
    } = useUsuariosApi();

    const handleInputChange = ( fieldName: keyof FormUserData, value: string | number ): void => {
        dispatch( { type: "handleInputChange", payload: { fieldName, value } } )
    }

    const handleDelete = (): void => {
        ( state.id_user !== '' ) && deleteUsuario( state );
    }

    const handleSubmit = (): void => {
        ( state.id_user !== '' )
        ? updateUsuario( state )
        : createUsuario( state );
    }

    return { state, handleInputChange, handleSubmit, handleDelete };

}
