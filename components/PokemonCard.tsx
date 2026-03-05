import React from "react";
import {Text, View, Image} from "react-native";
interface PokemonCardsProps {
    name : string;
    url : string;
}

export default function PokemonCard(props : PokemonCardsProps){  {
    const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.url.split("/")[6]}.png`;
    return(
        <View>
            <Image source={{uri: pokemonImageURL}} style={{width: 100, height: 100}} />
            <Text>{props.name}</Text>
            <Text>{props.url}</Text>
        </View>
    )
}}