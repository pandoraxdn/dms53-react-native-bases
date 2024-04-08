import { useEffect, useState } from 'react';
import { pandoraApi } from '../api/pandoraApi';
import { 
    SensorDataResponse, 
    Today, 
    Yesterday, 
    BeforeYesterday 
} from '../interfaces/pandoraApiInterfaces';

interface TypeData{
    min:    number,
    max:    number,
    labels: string[],
    values: number[],
}

export const useSensorData = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>();
    const [ data, setData ] = useState<SensorDataResponse>();
    const [ today, setToday ] = useState<TypeData>();
    const [ yesterday, setYesterday ] = useState<TypeData>();
    const [ beforeYesterday, setBeforeYesterday ] = useState<TypeData>();

    const urlData = 'http://192.168.100.20:3000/api/v1/sensor/data';

    const loadData = async () => {

        setIsLoading( false );

        const response = await pandoraApi.get<SensorDataResponse>( urlData );

        setData( response.data );

        chartData( 'today', data?.today );
        chartData( 'yesterday', data?.yesterday );
        chartData( 'beforeYesterday', data?.beforeYesterday );

        setIsLoading( true );

    }

    const chartData = ( type: string, data: any ) => {

        switch( type ){
            case 'today':
                (data != undefined) &&
                ( ( data: Today ) => {
                    const labels = data.lastToday.map((document) => {
                        let fecha = new Date( document.fecha );
                        return fecha.toLocaleString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
                    const values = data.lastToday.map((document) => {
                        return document.distancia_cm;
                    });
                    setToday({
                        min: data.minToday,
                        max: data.maxToday,
                        labels,
                        values,
                    });
                })( data );

                break;

            case 'yesterday':

                (data != undefined) &&
                ( ( data: Yesterday ) => {
                    const labels = data.lastYesterday.map((document) => {
                        let fecha = new Date( document.fecha );
                        return fecha.toLocaleString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
                    const values = data.lastYesterday.map((document) => {
                        return document.distancia_cm;
                    });
                    setYesterday({
                        min: data.maxYesterday,
                        max: data.minYesterday,
                        labels,
                        values,
                    });
                })( data );

                break;

            case 'beforeYesterday':
                (data != undefined) &&
                ( ( data: BeforeYesterday ) => {
                    const labels = data.lastBeforeYesterday.map((document) => {
                        let fecha = new Date( document.fecha );
                        return fecha.toLocaleString('es-MX', { hour: 'numeric', minute: 'numeric', hour12: true })
                    });
                    const values = data.lastBeforeYesterday.map((document) => {
                        return document.distancia_cm;
                    });
                    setBeforeYesterday({
                        min: data.maxBeforeYesterday,
                        max: data.minBeforeYesterday,
                        labels,
                        values,
                    });
                })( data );
                
                break;
        }

    }

    useEffect(() => {
        loadData();
    },[]);

    return { isLoading, loadData, data, today, yesterday, beforeYesterday };

}
