import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { appTheme } from '../../themes/appTheme';

export const LoginScreen = () => {

    const { 
        loading, 
        state, 
        handleInputChange, 
        handleLogin,
        request
    } = useLogin();

    return(
        <View
            style={{
                ...appTheme.globalMargin,
                ...appTheme.globalContainer
            }}
        >
            <View
                style={{ alignItems: "center" }}
            >
                {
                    ( !loading ) && 
                    <ActivityIndicator 
                        style={{ height: 100 }}
                        size={ 100 }
                        color="purple"
                    />
                }
                {
                    (request === false) &&
                    <Text 
                        style={{ fontSize: 30, color: "pink", fontWeight: "bold" }}
                    >
                        { 'Contraseña incorrecta \n' }
                        { 'Envío de datos faltantes \n' }
                    </Text>
                }
                <TextInput
                    style={ appTheme.input }
                    value={ state.correo }
                    onChangeText={ (text) => handleInputChange('correo', text) }
                    placeholder='E-mail'
                    keyboardType="email-address"
                    editable={ loading }
                />
                <TextInput
                    style={ appTheme.input }
                    value={ state.password }
                    secureTextEntry={ true }
                    onChangeText={ (text) => handleInputChange('password', text) }
                    placeholder='Contraseña'
                    editable={ loading }
                />
                <TouchableOpacity
                    onPress={ handleLogin } 
                    disabled={ !loading }
                >
                    <View
                        style={{ 
                            backgroundColor: "purple",
                            height: 50,
                            width: 100,
                            justifyContent: "center",
                            borderRadius: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                color: "white",
                                alignSelf: "center"
                            }}
                        >
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

}
