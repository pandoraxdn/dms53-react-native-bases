import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/stack/Settings';
import { MenuInterno } from '../componets/MenuInterno';
import { AvatarScreen } from '../screens/stack/AvatarScreen';
import { FormScreen } from '../screens/FormScreen';
import { FormContextScreen } from '../screens/FormContextScreen';
import { PokemonNavigator } from './PokemonNavigator';
import { MaterialBottomNavigator } from './MaterialBottomNavigator';
import { LoginScreen } from '../screens/Usuarios/LoginScreen';
import { AuthContext } from '../context/AuthContext';
import { SensorDataScreen } from '../screens/chars/SensorDataScreen';

export type RootStackParamsDrawer = {
    StackNavigator: undefined;
    Settings: undefined;
    AvatarScreen: undefined;
    FormScreen: undefined;
    FormContextScreen: undefined;
    PokemonNavigator: undefined;
    MaterialBottomNavigator: undefined;
    SensorDataScreen: undefined;
}

const Drawer = createDrawerNavigator<RootStackParamsDrawer>();

const Navigator = () => {

    const { width }  = useWindowDimensions();

    return(
        <Drawer.Navigator
            initialRouteName="MaterialBottomNavigator"
            screenOptions={{
                headerShown: true,
                drawerType: width >= 768 ? 'permanent' : 'front',
                //overlayColor: 'transparent',
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: 'rgba(238, 130, 238,0.8)',
                    width: width * 0.7,
                },
                headerStyle: {
                    height: 60,
                },
            }}
            drawerContent={ (props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen
                name="StackNavigator"
                options={{ title:"Home" }}
                component={ StackNavigator }
            />
            <Drawer.Screen
                name="Settings"
                options={{ title:"Settings" }}
                component={ Settings }
            />
            <Drawer.Screen
                name="AvatarScreen"
                options={{ title:"Perfil" }}
                component={ AvatarScreen }
            />
            <Drawer.Screen
                name="FormScreen"
                options={{ title:"Formulario" }}
                component={ FormScreen }
            />
            <Drawer.Screen
                name="PokemonNavigator"
                options={{ title:"Pokedex" }}
                component={ PokemonNavigator }
            />
            <Drawer.Screen
                name="FormContextScreen"
                options={{ title:"Formulario Context" }}
                component={ FormContextScreen }
            />
            <Drawer.Screen
                name="MaterialBottomNavigator"
                options={{ title:"Página Inicial" }}
                component={ MaterialBottomNavigator }
            />
            <Drawer.Screen
                name="SensorDataScreen"
                options={{ title:"Dashboard" }}
                component={ SensorDataScreen }
            />
        </Drawer.Navigator>
    );
}

export const DrawerNavigator = () => {
    const { authState } = useContext( AuthContext );
    return ( authState.isLoggenIn ) ? <Navigator/> : <LoginScreen/>
}

