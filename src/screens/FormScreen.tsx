import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from '../componets/BtnTouch';
import { useFormHook } from '../hooks/useFormHook';

export const FormScreen = () => {

    const { formData, formList, handleInputChange, handleSubmit } = useFormHook();

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
            <View>
                { /* Formulario */ }
                <TextInput
                    style={ appTheme.input }
                    value={ formData.username }
                    onChangeText={ (text) => handleInputChange( 'username', text ) }
                    placeholder='Nombre del usuario'
                />
                <TextInput
                    value={ formData.password }
                    style={ appTheme.input }
                    secureTextEntry={ true }
                    onChangeText={ (text) => handleInputChange( 'password', text ) }
                    placeholder='Contraseña'
                />
                <TextInput
                    value={ formData.cp }
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
                {
                    ( formList.map( ( form, index ) => (
                        <Text key={index}>{ JSON.stringify(form) }</Text>
                    )))
                }
            </View>
        </View>
    );
}
