import axios from "axios";
import PokeComponent from "./components/PokeComponent";
import {useEffect, useState} from "react";

const getAPI = async () => {
	return axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
		.then((res) => {
			const {results} = res.data;
			console.log(results)

			return results;
		})
		.catch((err) => {
			console.error(err)
		})
}


function App() {
    const [pokemon, setPokemon] = useState([]);



	useEffect(() => {
		getAPI().then(pokis => {
			setPokemon(pokis);

		})
	},[])

  return (
	  <div>
		  <PokeComponent data={pokemon}/>
	  </div>
  );
}

export default App;
