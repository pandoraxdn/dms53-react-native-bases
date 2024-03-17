import { useState, useEffect } from 'react';
import { pokemonApi } from './../api/pokemonApi';
import { PokemonFull, Type } from '../interfaces/pokemonInterfaces';

interface TypePokemon{
    name: string;
    color: string;
}

interface UseTypeColorPokemon{
    isLoading: boolean;
    color: string[];
}

export const useTypeColorPokemon = ( id: string ): UseTypeColorPokemon => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ color, setColor ] = useState<string[]>([]);

    const types: TypePokemon[] = [
        {'name':'normal', 'color':'#A8A878'},
        {'name':'fighting', 'color':'#C03028'},
        {'name':'flying', 'color':'#A890F0'},
        {'name':'poison', 'color':'#A040A0'},
        {'name':'ground', 'color':'#E0C068'},
        {'name':'rock', 'color':'#B8A038'},
        {'name':'bug', 'color':'#A8B820'},
        {'name':'ghost', 'color':'#705898'},
        {'name':'steel', 'color':'#B8B8D0'},
        {'name':'fire', 'color':'#F08030'},
        {'name':'water', 'color':'#6890F0'},
        {'name':'grass', 'color':'#78C850'},
        {'name':'electric', 'color':'#F8D030'},
        {'name':'psychic', 'color':'#F85888'},
        {'name':'ice', 'color':'#98D8D8'},
        {'name':'dragon', 'color':'#7038F8'},
        {'name':'dark', 'color':'#705848'},
        {'name':'fairy', 'color':'#EE99AC'},
        {'name':'default', 'color':'#68A090'},
    ];

    const getColorType = ( pokemonType: Type[] ) => {

        const newColorList:string[] = pokemonType.map( ( { type }) => {
            const found: TypePokemon | any = types.find( ( element ) => element.name == type.name );
            return found.color;
        });

        setColor( newColorList );
    }

    const loadType = async () => {
        const response = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        getColorType( response.data.types );
        setIsLoading(false);
    }

    useEffect(() => {
        loadType();
    },[]);

    return { isLoading, color };

}


