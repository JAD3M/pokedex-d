import { Text, View } from "react-native";
import { use, useEffect } from "react";
export default function Index() {
  useEffect(() => {
    console.log("entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/1/";
    const response = await fetch(url); /*request a la api */
    const data = await response.json();
    console.log(data);
  };
  return (
    <View>
      <Text>Yhael</Text>
    </View>
  );
}
