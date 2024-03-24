import React, { useEffect } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { LoginResponse } from '../../interfaces/pandoraApiInterfaces';
import { appTheme } from '../../themes/appTheme';
import { useUsuariosApi } from '../../hooks/useUsuariosApi';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { BtnTouch } from '../../componets/BtnTouch';
import { UsuarioCard } from '../../componets/UsuarioCard';

export const HomeUsuariosScreen = () => {

    const { listUsuarios, isLoading, loadUsuarios } = useUsuariosApi();

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const crearUsuario: LoginResponse ={
        id_user: '',
        nameuser: '',
        correo: '',
        image: '',
        password: '',
        update: '',
    }

    useEffect( () => {
        loadUsuarios();
    },[ isFocused ]);

    return(
        <View
            style={ appTheme.globalContainer }
        >
            <FlatList
                data={ Object.values( listUsuarios ) }
                keyExtractor={ (item) => '#'+item.id_user }
                ListHeaderComponent={(
                    <View>
                        <Text
                            style={{
                                ...appTheme.title,
                                ...appTheme.globalMargin,
                                marginTop: 20
                            }}
                        >
                            Lista de usuarios
                        </Text>
                        <BtnTouch
                            title='Crear usuario'
                            action={ () => navigation.navigate("FormUsuariosScreen",{ LoginResponse: crearUsuario }) }
                            background='pink'
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadUsuarios}
                        colors={ ["pink"] }
                        progressBackgroundColor="black"
                    />
                }
                numColumns={ 2 }
                renderItem={ ( { item } ) => (
                    <UsuarioCard
                        usuario={ item }
                    />
                )}
            />
        </View>
    );
}
