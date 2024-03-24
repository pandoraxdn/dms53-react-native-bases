import React, { useEffect } from 'react';
import { View, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useFormUsuarios } from '../../hooks/useFormUsuarios';
import { RootStackUsuarioParams } from '../../navigator/UsuarioNavigator';
import { BtnTouch } from '../../componets/BtnTouch';
import { appTheme } from '../../themes/appTheme';

interface Props extends StackScreenProps<RootStackUsuarioParams,'FormUsuariosScreen'>{};

export const FormUsuariosScreen = ( { navigation, route }: Props ) => {

    const { 
        state, 
        handleSubmit, 
        handleInputChange, 
        handleDelete 
    } = useFormUsuarios();

    useEffect( ()=>{
        const usuario = route.params.LoginResponse;
        handleInputChange('id_user',usuario.id_user);
        handleInputChange('nameuser',usuario.nameuser);
        handleInputChange('image',usuario.image);
        handleInputChange('correo',usuario.correo);
    },[]);

    return(
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <ScrollView>
                <View
                    style={{
                        ...appTheme.globalMargin,
                        ...appTheme.globalContainer
                    }}
                >
                    {
                        ( state.id_user !== undefined ) &&
                        <BtnTouch
                            title='Eliminar Usuario'
                            action={ () => {
                                handleDelete();
                                navigation.popToTop();
                            }}
                            background='red'
                        />
                    }
                    <View
                        style={{ alignItems: "center" }}
                    >
                        {/* Formulario */}
                        <TextInput
                            style={ appTheme.input }
                            value={ state.correo }
                            onChangeText={ (text) => handleInputChange('correo', text) }
                            placeholder='E-mail'
                        />
                        <TextInput
                            style={ appTheme.input }
                            value={ state.nameuser }
                            onChangeText={ (text) => handleInputChange('nameuser', text) }
                            placeholder='Nombre del usuario'
                        />
                        <TextInput
                            style={ appTheme.input }
                            value={ state.image }
                            onChangeText={ (text) => handleInputChange('image', text) }
                            placeholder='Imagen del usuario'
                        />
                        <TextInput
                            style={ appTheme.input }
                            value={ state.password }
                            secureTextEntry={ true }
                            onChangeText={ (text) => handleInputChange('password', text) }
                            placeholder='Contraseña'
                        />
                        <BtnTouch
                            action={() => {
                                handleSubmit();
                                navigation.popToTop();
                            }}
                            title={ ( state.id_user !== '' ) ? 'Actualizar Registro' : 'Crear registro' }
                            background='violet'
                        />
                        <BtnTouch
                            action={ () => navigation.popToTop() }
                            title='Regresar'
                            background='purple'
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
