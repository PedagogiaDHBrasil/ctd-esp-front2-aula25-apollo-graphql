import React from "react";
import ListarPokemonsItem from "./ListarPokemonsItem";
import { Pokemon } from "../types/pokemon.types";

/**
 * Veja uma lista de pokémons
 *
 * Ex:
 * <pre>
 *     <ListarPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListarPokemons = () => {
  const loading = true;
  const data = { pokemons: [] };

  if (loading) return <div>Carregando pokémons...</div>;
  if (!data?.pokemons) return <></>;
  return (
    <div className="listar">
      {data.pokemons &&
        data.pokemons.map((pokemon: Pokemon) => (
          <ListarPokemonsItem pokemon={pokemon} key={pokemon.name} />
        ))}
    </div>
  );
};

export default ListarPokemons;
