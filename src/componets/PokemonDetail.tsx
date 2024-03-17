import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface Props{
    pokemon: PokemonFull;
}

export const PokemonDetail = ( {pokemon}: Props ) => {

    return(
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >
            { /* Types/tipos */ }
            <View>
                <Text
                    style={{
                        ...style.title,
                        marginTop: 370,
                        marginHorizontal: 20,
                    }}
                >
                    Type(s)
                </Text>
                <View
                    style={{ flexDirection: "row" }}
                >
                    {
                        pokemon.types.map( ( { type } ) => (
                            <Text
                                style={{
                                    ...style.regularText,
                                    marginRight: 10,
                                    marginHorizontal: 20,
                                }}
                                key={type.name}
                            >
                                { type.name }
                            </Text>
                        ) )
                    }
                </View> 
                { /* Weight/peso */ }
                <View>
                    <Text
                        style={{
                            ...style.title,
                            marginHorizontal: 20,
                        }}
                    >
                        Weight
                    </Text>
                    <Text
                        style={{
                            ...style.regularText,
                            marginHorizontal: 20,
                        }}
                    >
                        { pokemon.weight+" lb" }
                    </Text>
                </View>
                { /* Sprites/Imágenes */ }
                <View
                    style={{ 
                        ...style.container,
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            ...style.title,
                        }}
                    >
                        Sprites
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Image
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.back_default
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.front_shiny
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.back_shiny
                            }}
                            style={ style.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                            style={ style.basicSprite }
                        />
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container:{
        marginHorizontal: 20,
    },
    basicSprite:{
        height: 100,
        width: 100,
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        margingTop: 20,
    },
    regularText:{
        fontSize: 19,
   }
});

