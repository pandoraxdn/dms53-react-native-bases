import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { PokemonHome } from "../screens/PokemonHome";
import { PokemonScreen } from "../screens/PokemonScreen";
import { PokemonSimple } from "../interfaces/pokemonInterfaces";

export type RootStackPokemonParams = {
    PokemonHome: undefined;
    PokemonScreen: { PokemonSimple: PokemonSimple };
}

const Stack = createStackNavigator<RootStackPokemonParams>();

export const PokemonNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen
                component={ PokemonHome }
                name="PokemonHome"
                options={{ title: "Pokemon Home" }}
            />
            <Stack.Screen
                component={ PokemonScreen }
                name="PokemonScreen"
                options={{ title: "Detail Pokemon" }}
            />
        </Stack.Navigator>
    );
}
