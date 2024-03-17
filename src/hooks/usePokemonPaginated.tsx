import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginateResponse, Result, PokemonSimple } from './../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const [ simplePokemonList, setSimplePokemonList ] = useState<PokemonSimple[]>([]);

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');

    const loadPokemons = async () => {

        setIsLoading(true); 

        const response = await pokemonApi.get<PokemonPaginateResponse>(nextPageUrl.current);

        nextPageUrl.current = response.data.next;

        mapPokemonList( response.data.results );

    }

    const mapPokemonList = ( pokemonList: Result[] ) => {

        const newPokemonList:PokemonSimple[] = pokemonList.map( ({name,url}) =>{
            // https://pokeapi.co/api/v2/pokemon/1/
            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 2 ];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return{
                id,
                name,
                picture,
            }
        });



        setSimplePokemonList( (prevSimplePokemonList) => [ ...prevSimplePokemonList, ...newPokemonList ] );

        setIsLoading(false);
        
    }

    useEffect(() => {
        loadPokemons();
    },[]);

    return { isLoading, simplePokemonList, loadPokemons };

}
