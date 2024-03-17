import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { PokemonSimple } from '../interfaces/pokemonInterfaces';
import { useTypeColorPokemon } from '../hooks/useTypeColorPokemon';


import { useNavigation } from '@react-navigation/native';

interface Props{
    pokemon: PokemonSimple;
}

const widthWindows = Dimensions.get("window").width;

export const PokemonCard = ( { pokemon }: Props ) => {

    const navigation = useNavigation();
    const { color } = useTypeColorPokemon( pokemon.id );

    return(
        <TouchableOpacity
            key={ `${pokemon.id}${pokemon.name}` }
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate("PokemonScreen",{PokemonSimple:pokemon}) }
        >
            <View
                style={{
                    ...styles.cardContainer,
                    width: widthWindows * 0.4
                }}
            >
                { /*background*/ }
                <View
                    style={{
                        ...styles.backgroundTop,
                        backgroundColor: (color.length > 1) ? color[1] : color[0],
                    }}
                />
                <View
                    style={{
                        ...styles.backgroundBottom,
                        backgroundColor: color[0],
                    }}
                />
                {/* Nombre del pokemon */}
                <View
                    style={{
                        marginHorizontal: 5,
                    }}
                >
                    <Text
                        style={ styles.name }
                    >
                        { pokemon.name }
                        { '\n#'+pokemon.id }
                    </Text>
                </View>
                <Image
                    style={ styles.pokebola }
                    source={ require('./../../assets/pokebola-blanca.png') }
                />
                <Image
                    style={ styles.pokemonImage }
                    source={{ uri: pokemon.picture }}
                />
            </View>
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
        overflow: 'hidden',
    },
    backgroundTop: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: "50%",
        backgroundColor: "blue",
        transform: [
            { rotateX: "20deg" },
            { rotateY: "-45deg" },
            { scale: 2 }
        ]
    },
    backgroundBottom:{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "red",
        transform: [
            { rotateX: "20deg" },
            { rotateY: "-45deg" },
            { scale: 2 }
        ]
    },
    name:{
        color: "white",
        fontSize: 25,
        fontWeight: "bold"
    },
    pokebola: {
        height: 100,
        width: 100,
        position: "absolute",
        bottom: -20,
        right: -20,
        opacity: 0.5,
    },
    pokemonImage:{
        width: 100,
        height: 100,
        position: "absolute",
        right: -8,
        bottom: -5,
    }
});
