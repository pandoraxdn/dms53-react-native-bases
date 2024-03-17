import { useEffect, useState } from "react";
import { PokemonFull } from "../interfaces/pokemonInterfaces";
import { pokemonApi } from "../api/pokemonApi";

interface UsePokemon{
    isLoading: boolean;
    pokemon: PokemonFull;
}

export const usePokemon = ( id: string ): UsePokemon => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const [ pokemon, setPokemon ] = useState<PokemonFull>({} as PokemonFull);

    const loadPokemon = async () => {
        setIsLoading( true );    
        const response = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon( response.data );
        setIsLoading( false );    
    }

    useEffect( () => {
        loadPokemon();
    }, [] );

    return { isLoading, pokemon };
}
