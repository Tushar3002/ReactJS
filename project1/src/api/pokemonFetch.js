// https://pokeapi.co/api/v2/pokemon?limit=386
import axios from 'axios';

export const fetchPokemon=async()=>{
    try {
        const res=await axios.get('https://pokeapi.co/api/v2/pokemon?limit=386');
        return res.data;

    } catch (error) {
        console.log(error);
        
    }
}