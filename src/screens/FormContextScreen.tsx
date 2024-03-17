import React, { useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useFormHookContext } from '../hooks/useFormHookContext';
import { BtnTouch } from '../componets/BtnTouch';
import { appTheme } from '../themes/appTheme';

export const FormContextScreen = () => {

    const { state, handleSubmit, handleInputChange } = useFormHookContext();

    const { authState } = useContext( AuthContext );

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin,
                marginHorizontal: 10,
            }}
        >
            <Text
                style={appTheme.title}
            >
                Formulario Usuario
            </Text>
            <View
                style={{ alignItems: "center" }}
            >
                { /* Formulario */ }
                <TextInput
                    style={ appTheme.input }
                    value={ state.input.username }
                    onChangeText={ (text) => handleInputChange( 'username', text ) }
                    placeholder='Nombre del usuario'
                />
                <TextInput
                    value={ state.input.password }
                    style={ appTheme.input }
                    secureTextEntry={ true }
                    onChangeText={ (text) => handleInputChange( 'password', text ) }
                    placeholder='Contraseña'
                />
                <TextInput
                    value={ state.input.cp }
                    style={ appTheme.input }
                    keyboardType='numeric'
                    onChangeText={ (text) => handleInputChange( 'cp', text ) }
                    placeholder='CP'
                />
                <BtnTouch
                    action={ handleSubmit }
                    title='Enviar Información'
                    background='black'
                />
            </View>
            <View>
                <View>
                    {
                        ( state.data.map( ( form, index ) => (
                            <Text 
                                key={index}
                                style={{ fontSize: 20 }}
                            >
                                { JSON.stringify(form) }
                            </Text>
                        )))
                    }
                </View>
                <View>
                    {
                        ( authState.formData.map( ( form, index ) => (
                            <Text 
                                key={index}
                                style={{ fontSize: 20 }}
                            >
                                { JSON.stringify(form) }
                            </Text>
                        )))
                    }
                </View>
            </View>
        </View>
    );
}
