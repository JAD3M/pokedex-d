import { Text, View} from "react-native";
import { useEffect, useState } from "react";
export default function Index() {
  const [result, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("entre en pantalla");
    getPokemons();
  }, []);


  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(url); /*request a la api */
    const data = await response.json();
    setResults(data.results);
  };
  return (
    <View>
      {result.map((item) => {
        return <Text key={item.name}>{item.name}</Text>
      })}
    </View>
  );
}
