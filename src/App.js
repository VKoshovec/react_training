import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import PokeCard from './components/PokeCard';
import { Routes, Route, NavLink, useParams, Outlet  } from 'react-router-dom';
import { useState, useEffect } from 'react'


function App() {
  
  const [ pokemons, setPokemons] = useState([]);
 

  // console.log(pokemons[1]) 



  const pokeInfo=(name)=>{ 
    if (pokemons.length) {
       return { name }
    } else {
      return 1;
    }
  };
    
  
  console.log(pokemons);

  return (
    <div className="App">
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>   
     </nav>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/about' element={ <About/> } />
      <Route path='/contacts' element={ <Contacts/> }/> 
      <Route path="/contacts/:name" element= { <PokeCard/> } />
      <Route path='*' element={ <div>Bad adress</div> } /> 
    </Routes>  
    </div>
  );
}

export default App;