import React, { useEffect } from 'react';
import { View, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
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

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4,3],
          quality: 0.2,
        });

        (!result.canceled) && (() => {
          convertImageToBase64( result.assets[0].uri );
        })();

    };

    const convertImageToBase64 = async (imageUri: string) => {

        try {

          const base64 = await FileSystem.readAsStringAsync(imageUri, {
            encoding: FileSystem.EncodingType.Base64,
          });

          handleInputChange('image',base64);

        } catch (error) {

          console.error('Error converting image to base64:', error);

        }

    };

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
                            value={ state.password }
                            secureTextEntry={ true }
                            onChangeText={ (text) => handleInputChange('password', text) }
                            placeholder='Contraseña'
                        />
                        <BtnTouch
                            title="Seleccionar Imagen" 
                            action={ pickImage } 
                            background='black'
                        />
                        {
                            ( state.image !== '' ) && 
                            (
                                <Image 
                                    source={{ uri: `data:image/jpeg;base64,${state.image}` }} 
                                    style={{ width: 150, height: 150, borderRadius: 20 }} 
                                />
                            )
                        }
                        <BtnTouch
                            action={() => {
                                handleSubmit();
                                navigation.popToTop();
                            }}
                            title={ ( state.id_user !== undefined ) ? 'Actualizar Registro' : 'Crear registro' }
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
