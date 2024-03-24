import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { LoginResponse } from "../interfaces/pandoraApiInterfaces";
import { FormUserData } from "./useFormUsuarios";

export const useUsuariosApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ listUsuarios, setListUsuaros ] = useState<LoginResponse>({} as LoginResponse);

    const apiUrl = 'http://192.168.100.20:3000/api/v1/login';

    const loadUsuarios = async () => {
        setIsLoading(false);
        const response = await pandoraApi.get<LoginResponse>( apiUrl + "/list" );
        setListUsuaros( response.data );
        setIsLoading( true );
    }

    const createUsuario = async ( data: FormUserData ) => {

        const dataBody = {
            nameuser: data.nameuser,
            image: data.image,
            password: data.password,
            correo: data.correo,
        };

        await pandoraApi.post( apiUrl + "/register", dataBody );
    }

    const updateUsuario = async ( data: FormUserData ) => {

        const dataBody = {
            nameuser: data.nameuser,
            image: data.image,
            correo: data.correo,
        };

        const dataPass = 
            ( data.password !== '' ) 
            ? { ...dataBody, password: data.password } 
            : dataBody;

        await pandoraApi.put(apiUrl + `/update/${data.id_user}`, dataPass);
    }

    const deleteUsuario = async ( data: FormUserData ) => {

        await pandoraApi.delete( apiUrl + `/delete/${data.id_user}`);
    }

    useEffect( () => {
        loadUsuarios();
    },[]);

    return { 
        listUsuarios, 
        isLoading,
        loadUsuarios, 
        createUsuario, 
        updateUsuario, 
        deleteUsuario,
    };

}
