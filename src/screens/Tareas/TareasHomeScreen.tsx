import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { TareasResponse } from '../../interfaces/pandoraApiInterfaces';
import {appTheme} from '../../themes/appTheme';
import { useTareaApi } from '../../hooks/useTareasApi';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { BtnTouch } from '../../componets/BtnTouch';
import { TareasCard } from '../../componets/TareaCard';

export const TareasHomeScreen = () => {

    const { listTareas, isLoading, loadTareas } = useTareaApi();

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const createTarea: TareasResponse = {
        _id: '',
        titulo: '',
        descripcion: '',
        estado: 'Pendiente',
        __v: 0,
    }

    useEffect( () => {
        ( isLoading ) && loadTareas();
    },[isFocused]);

    return(
        <View
            style={ appTheme.globalContainer }
        >
            <FlatList
                // Convertir objectos en array
                data={ Object.values( listTareas ) }
                keyExtractor={ (item) => '#'+item._id }
                ListHeaderComponent={(
                    <View>
                        <Text
                            style={{
                                ...appTheme.title,
                                ...appTheme.globalMargin,
                                marginTop: 20
                            }}
                        >
                            Pan de aguacate
                        </Text>
                        {
                            ( !isLoading ) &&
                            <ActivityIndicator
                                style={{ height: 100 }}
                                size={ 40 }
                                color="pink"
                            />
                        }
                        <BtnTouch
                            title='Crear tarea'
                            action={ () => navigation.navigate("TareaFormScreen",{TareasResponse:createTarea}) }
                            background='#5DADE2'
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadTareas }
                        colors={ ["pink"] }
                        progressBackgroundColor="black"
                    />
                }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ( { item } ) => (
                    <TareasCard
                        tarea={ item }
                    />
                )}
            />
        </View>
    )
}
