import React from 'react';
import { View, Image ,Text, FlatList, ActivityIndicator } from 'react-native';
import { PokemonCard } from '../componets/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { appTheme } from '../themes/appTheme';

export const PokemonHome = () => {

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return(
        <View
            style={ appTheme.globalContainer }
        >
            <Image
                source={ require('./../../assets/pokebola.png') }
                style={{
                    top: -100,
                    right: -100,
                    height: 300,
                    position: "absolute",
                    opacity: 0.8,
                    width: 300
                }}
            />
            <FlatList
                data={ simplePokemonList }
                keyExtractor={ (pokemon) => pokemon.id }
                
                // Header
                ListHeaderComponent={(
                    <Text
                        style={{
                            ...appTheme.title,
                            ...appTheme.globalMargin,
                            marginTop: 20
                        }}
                    >
                        Pokédex
                    </Text>
                )}
                
                // Body
                showsVerticalScrollIndicator={false}
                // Aviso si cambio el valor, tengo que reiniciar el 
                // aplicativo
                numColumns={ 2 }
                renderItem={ ( { item } ) => (
                    <PokemonCard
                        pokemon={item}
                    />
                )}

                // Ininite Scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.2 } // % contenido
                
                // Footer Component
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={ 40 }
                        color="pink"
                    />
                )}
            />
        </View>
    );
}

