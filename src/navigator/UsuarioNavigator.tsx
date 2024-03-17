import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeUsuariosScreen } from "../screens/Usuarios/HomeUsuariosScreen";
import { FormUsuariosScreen } from "../screens/Usuarios/FormUsuariosScreen";
import { LoginResponse } from "../interfaces/pandoraApiInterfaces";

export type RootStackUsuarioParams = {
    HomeUsuariosScreen: undefined;
    FormUsuariosScreen: { LoginResponse: LoginResponse }
}

const Stack = createStackNavigator<RootStackUsuarioParams>();

export const UsuarioNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: "white",
                }
            }}
        >
            <Stack.Screen
                component={ HomeUsuariosScreen }
                name="HomeUsuariosScreen"
            />
            <Stack.Screen
                component={ FormUsuariosScreen }
                name="FormUsuariosScreen"
            />
        </Stack.Navigator>
    );
}

