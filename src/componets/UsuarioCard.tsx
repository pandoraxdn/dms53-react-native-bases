import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LoginResponse } from '../interfaces/pandoraApiInterfaces';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props{
    usuario: LoginResponse;
}

export const UsuarioCard = ( { usuario } :Props ) => {

    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    return(
        <TouchableOpacity
            key={ `${usuario.id_user}${usuario.update}` }
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate('FormUsuariosScreen',{ LoginResponse: usuario }) }
        >
            <View
                style={{
                    ...styles.cardContainer,
                    backgroundColor: "green",
                    width: width * 0.40,
                }}
            >
                <Text
                    style={ styles.title }
                >
                    { `Usuario: \n ${usuario.nameuser} \n` }
                    { `E-mail: \n ${usuario.correo} \n` }
                </Text>
            </View>
            <FontAwesome
                style={ styles.icon }
                name='users'
                size={75}
                color="white"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: "hidden"
    },
    title:{
        marginHorizontal: 15,
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    icon:{
        position: "absolute",
        bottom: 20,
        right: 15,
        opacity: 0.5,
    }
});
