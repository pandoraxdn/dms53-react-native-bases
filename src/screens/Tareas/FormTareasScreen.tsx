import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackTareaParams } from '../../navigator/TareaNavigator';
import { useFormTarea } from '../../hooks/useFormTarea';
import { BtnTouch } from '../../componets/BtnTouch';
import { appTheme } from '../../themes/appTheme';

interface Props extends StackScreenProps<RootStackTareaParams,'TareaFormScreen'>{};

interface BtnForm{
    title: string;
    estado: string;
    action: () => void;
}

const BtnForm = ( { title, estado, action } :BtnForm ) => {

    let colorbtn: string = 'white';

    switch( estado ){
        case 'En proceso':
            colorbtn = 'gray';
            break;
        case 'Completado':
            colorbtn = 'green';
            break;
        case 'Pendiente':
            colorbtn = 'brown';
            break;
    }

    return(
        <TouchableOpacity
            onPress={ action }
        >
            <View
                style={{
                    backgroundColor: colorbtn,
                    borderRadius: 30,
                    borderWidth: ( estado == '' ) ? 1 : 0,
                    marginHorizontal: 2,
                    justifyContent: 'center',
                    height: 60,
                    width: 90,
                }}
            >
                <Text
                    style={{
                        color: ( estado == '' ) ? 'black' : 'white',
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 17
                    }}
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity> 
    );

}

export const TareaFormScreen = ( { navigation, route } :Props ) => {

    const { 
        state, 
        handleSubmit, 
        handleInputChange, 
        handleDelete
    } = useFormTarea();

    useEffect( () => {
        const tarea = route.params.TareasResponse;
        handleInputChange( '_id', tarea._id );
        handleInputChange( 'titulo', tarea.titulo );
        handleInputChange( 'descripcion', tarea.descripcion );
        handleInputChange( 'estado', tarea.estado );
    },[]);

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin,
                marginHorizontal: 10,
            }}
        >
            {
                ( state._id !== '' ) && 
                <BtnTouch 
                    title='Eliminar Tarea' 
                    action={ () => {
                        handleDelete();
                        navigation.popToTop();
                    }}
                    background='red'
                />
            }
            <Text
                style={appTheme.title}
            >
                Formulario Tareas
            </Text>
            <View
                style={{ alignItems: "center" }}
            >
                { /* Formulario */ }
                <TextInput
                    style={ appTheme.input }
                    value={ state.titulo }
                    onChangeText={ (text) => handleInputChange( 'titulo', text ) }
                    placeholder='Título de la tarea'
                />
                <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.descripcion }
                    onChangeText={ (text) => handleInputChange( 'descripcion', text ) }
                    multiline={true}
                    numberOfLines={5}
                    placeholder='Descripción de la tarea'
                />
                <Text
                    style={ appTheme.menuText }
                >
                    Estado de tarea
                </Text>
                <View
                    style={{ flexDirection: 'row', marginTop: 5 }}
                >
                    <BtnForm
                        title='Pendiente'
                        action={ () => handleInputChange('estado','Pendiente') }
                        estado={ ( state.estado == 'Pendiente' ) ? state.estado : '' }
                    />
                    <BtnForm
                        title='En proceso'
                        action={ () => handleInputChange('estado','En proceso') }
                        estado={ ( state.estado == 'En proceso' ) ? state.estado : '' }
                    />
                    <BtnForm
                        title='Completado'
                        action={ () => handleInputChange('estado','Completado') }
                        estado={ ( state.estado == 'Completado' ) ? state.estado : '' }
                    />
                </View>
                <BtnTouch
                    action={ () => {
                        handleSubmit();
                        navigation.popToTop();
                    }}
                    title={ ( state._id != '' ) ? 'Actualizar Registro' : 'Crear Registro' }
                    background='black'
                />
                <BtnTouch
                    action={ () => navigation.popToTop() }
                    title="Regresar"
                    background='violet'
                />
            </View>
        </View>
    );
}

