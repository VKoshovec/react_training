import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const  getPokemons = (arr) => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }; 


  

const Contacts = () => {

    const [ pokemons, setPokemons] = useState([]);
 

    useEffect(() => {
         getPokemons().then(result => setPokemons(result.data.results));
       }
      ,[]);

    console.log(pokemons)

    return (

    <div>
          { pokemons.map ((element) => 
            <Link to={ element.name } key={element.name}> {element.name}</Link>
          )
          }
    </div>

    )
}

export default Contacts;