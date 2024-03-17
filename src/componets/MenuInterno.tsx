import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { appTheme } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const MenuInterno = ( {navigation}:DrawerContentComponentProps ) => {

    const assets: string = './../../assets/';

    const { authState } = useContext( AuthContext );

    return(
        <DrawerContentScrollView>
            <View
                style={ appTheme.avatarContainer }
            >
                <Image
                    style={ appTheme.avatar }
                    source={
                        ( !authState.isLoggenIn || authState.favoriteImage == undefined )
                        ? require( assets + 'I.png' ) 
                        : { uri: authState.favoriteImage }
                    }
                />
                <Text
                    style={ appTheme.title }
                >
                    { 
                        ( authState.isLoggenIn ) && authState.username
                    }
                </Text>
            </View>
            <View
                style={ appTheme.menuContainer }
            >
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("StackNavigator") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("Settings") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Settings
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("AvatarScreen") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Perfil
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("FormScreen") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Formulario
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("PokemonNavigator") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Pokedex
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("FormContextScreen") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Formulario Context
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ appTheme.menuBtn }
                    onPress={ () => navigation.navigate("MaterialBottomNavigator") }
                >
                    <Text
                        style={ appTheme.menuText }
                    >
                        Tabs
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
