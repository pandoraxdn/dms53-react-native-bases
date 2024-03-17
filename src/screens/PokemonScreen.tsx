import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackPokemonParams } from '../navigator/PokemonNavigator';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetail } from '../componets/PokemonDetail';
import { useTypeColorPokemon } from '../hooks/useTypeColorPokemon';

interface Props extends StackScreenProps<RootStackPokemonParams,"PokemonScreen">{};

export const PokemonScreen = ( { navigation,route }: Props ) => {

    const { PokemonSimple } = route.params;

    const { id, name, picture  } = PokemonSimple;

    const { isLoading, pokemon } = usePokemon( id );

    const { color } = useTypeColorPokemon( id );

    return(
        <View
            style={{ flex: 1 }}
        >
            <View>
                <View
                    style={{
                        ...style.leftContainer,
                        backgroundColor: (color.length > 1) ? color[1] : color[0],
                    }}
                />
                <View
                    style={{
                        ...style.rightContainer,
                        backgroundColor: color[0],
                    }}
                />
            </View>
            { /*Header*/ }
            <View
                style={{
                    ...style.headerContainer
                }}
            >
                <TouchableOpacity
                    style={ style.backBtn }
                    onPress={ () => navigation.goBack() }
                >
                    <Text
                        style={ style.row }
                    >
                        ←
                    </Text>
                </TouchableOpacity>
                { /*Pokemon Nombre*/ }
                <Text
                    style={ style.pokemonName }
                >
                    { name } { "\n#"+id }
                </Text>
                <Image
                    source={ require('./../../assets/pokebola-blanca.png') }
                    style={ style.pokeball }
                />
                <Image
                    source={{ uri: picture }}
                    style={ style.pokemonImage }
                />
            </View>
            { /* Ddetails and loading */ }
            {
                isLoading
                ?
                (
                    <View
                        style={ style.loadingIndicator }
                    >
                        <ActivityIndicator
                            color="black"
                            size={ 60 }
                        />
                    </View>
                )
                : <PokemonDetail pokemon={pokemon} />
            }
        </View>
    )
}

const style = StyleSheet.create({
    backBtn: {
        position: "absolute",
        left: 20,
    },
    row:{
        color: "white",
        fontSize: 60,
    },
    loadingIndicator:{
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    headerContainer:{
        alignItems: "center",
        height: 370,
        zIndex: 999,
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    pokeball:{
        height: 240,
        width: 240,
        opacity: 0.7,
    },
    pokemonImage:{
        bottom: -10,
        height: 240,
        position: "absolute",
        width: 240
    },
    pokemonName:{
        color: "white",
        fontSize: 35,
        alignSelf: "flex-start",
        left: 20,
        marginTop: 65,
        marginLeft: 20,
    },
    leftContainer:{
        position: "absolute",
        left: 0,
        height: 370,
        width: "50%",
        backgroundColor: 'gray',    
        borderBottomLeftRadius: 1000,
    },
    rightContainer:{
        position: "absolute",
        right: 0,
        height: 370,
        width: "50%",
        backgroundColor: 'black',
        borderBottomRightRadius: 1000,
    },

});

