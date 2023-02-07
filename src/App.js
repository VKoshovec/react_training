import logo from './logo.svg';

import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import { Routes, Route, NavLink  } from 'react-router-dom';

function App() {
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
      <Route path='/contacts' element={ <Contacts/> } />
      <Route path='*' element={ <div>Bad adress</div> }/>
    </Routes>  
    </div>
  );
}

export default App;