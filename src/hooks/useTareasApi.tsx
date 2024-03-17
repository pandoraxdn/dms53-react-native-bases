import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { TareasResponse } from "../interfaces/pandoraApiInterfaces";
import { FormData } from "./useFormTarea";

export const useTareaApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);


    const [ listTareas, setListTareas ] = useState<TareasResponse>({} as TareasResponse);

    const apiUrl: string = 'http://192.168.100.100:3000/api/v1/tareas';

    const loadTareas = async () => {

        setIsLoading(false); 

        const response = await pandoraApi.get<TareasResponse>( apiUrl );

        setListTareas( response.data );

        setIsLoading(true); 

    }

    const  createTarea =  async ( data: FormData ) => {
        const dataBody = {
            titulo: data.titulo,
            descripcion: data.descripcion,
            estado: data.estado,
        };

        await pandoraApi.post( apiUrl, dataBody );

    }

    const updateTarea =  async ( data: FormData ) => {

        const dataBody = {
            titulo: data.titulo,
            descripcion: data.descripcion,
            estado: data.estado,
        };

        await pandoraApi.put( apiUrl + `/${data._id}`, dataBody );

    }

    const deleteTarea = async ( data: FormData ) => {
        await pandoraApi.delete( apiUrl + `/${data._id}` );
    }

    useEffect(() =>{
        loadTareas();
    },[]);

    return { 
        isLoading, 
        listTareas,
        loadTareas, 
        createTarea, 
        updateTarea, 
        deleteTarea
    };

}
