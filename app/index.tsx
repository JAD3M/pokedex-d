import { Text, View, ScrollView} from "react-native";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
/*creamos estado para almacenar los resultados de pokemons*/
export default function Index() {
  const [result, setResults] = useState<any[]>([]);/*useState es dinamico*/
  useEffect(() => {/*useEffect para ejecutar el componente montado*/
    console.log("entre en pantalla");
    getPokemons();
  }, []);

/*función para obtener los pokemons de la API*/
  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(url); /*request a la api */
    const data = await response.json();
    setResults(data.results);
  };
  return (
    <ScrollView>
      {/* mostramos los pokemons obtenidos de la API */}
      {result.map((item) => {
        return <PokemonCard key = {item.name} name = {item.name} url = {item.url} />;
      })}
    </ScrollView>
  );
}
