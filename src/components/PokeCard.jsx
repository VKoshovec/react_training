import { useParams } from 'react-router-dom';
import  css  from './pokeCard.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



const PokeCard = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => setPokemon(res))
        return ( setPokemon ({}));
    },[])

    
    console.log(pokemon);

    return (
        
        <div className= { css.card }>
            <span>{ name }</span>
            <img className= { css.img } src={ pokemon } />
        </div>
    )
}

export default PokeCard;