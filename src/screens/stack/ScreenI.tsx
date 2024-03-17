
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator'; 
import { BtnTouch } from '../../componets/BtnTouch';
import { appTheme } from '../../themes/appTheme';
import { AuthContext } from '../../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams,"ScreenI">{};

interface Alumno{
    id: number;
    nombre: string;
}

export const ScreenI = ( { navigation }:Props ) => {

    const { authState, singIn, logout, changeUserName } = useContext( AuthContext );

    const alumno: Alumno = {
        id: 12,
        nombre: "Andrea"
    }

    const alumno2: Alumno = {
        id: 13,
        nombre: "Maria"
    }

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text
                style={ appTheme.title }
            >
                ScreenI
            </Text>
            <BtnTouch
                action={ () => navigation.navigate("ScreenII") }
                title='Ir a la página II'
                background='violet'
            />
            <BtnTouch
                action={ () => {navigation.navigate("PersonaScreen", {
                    id: 1,
                    nombre: "Jose Luis"
                }),
                    ( !authState.isLoggenIn )
                    ? console.log('User no sing in')
                    : changeUserName("Jose Luis")
                }}
                title='Detalle Jose Luis'
                background='green'
            />
            <BtnTouch
                action={ () => navigation.navigate("PersonaScreen", { ...alumno }) }
                title={ `Detalle: ${alumno.nombre}` }
                background='blue'
            />
            <BtnTouch
                action = { () => navigation.navigate("PersonaScreen", 
                { id: alumno2.id, nombre: alumno2.nombre }) }
                title={ `Detalle: ${alumno2.nombre}` }
                background='pink'
            />
            { /* Context */ }
            
            { 
                ( ! authState.isLoggenIn )
                ? <BtnTouch title='SingIn' action={ singIn }  background='gray'/>
                : <BtnTouch title='Logout' action={ logout }  background='black'/>
            }

            {/*
            <TouchableOpacity
                onPress={ () => navigation.navigate("ScreenII") }
            >
                <View>
                    <Text>
                        Ir a la página II
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.navigate("PersonaScreen", {
                    id: 1,
                    nombre: "Jose Luis"
                }) }
            >
                <View>
                    <Text>
                        Detalles de Jose Luis
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.navigate("PersonaScreen", { ...alumno }) }
            >
                <View>
                    <Text>
                        Detalles de { alumno.nombre }
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={ () => navigation.navigate("PersonaScreen", 
                { id: alumno.id, nombre: alumno.nombre }) }
            >
                <View>
                    <Text>
                        Detalles de { alumno.nombre }
                    </Text>
                </View>
            </TouchableOpacity>
            */}
        </View>
    );
}
