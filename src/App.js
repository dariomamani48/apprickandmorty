import { useState } from 'react'
import './App.css';
import Characters from './components/Characters';
import imgRickMorty from './img/rick-morty.png'

function App() {
  const [characters, setCharacters] = useState(null)
const reqApi= async()=>{
  const api = await fetch("https://rickandmortyapi.com/api/character")
  const characterApi = await api.json()
  
  setCharacters(characterApi.results)
}



  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty</h1>
        {characters ? (<Characters characters={characters} setCharacters={setCharacters}/>):(
        <><img src={imgRickMorty} alt="rick and morty" className="img-home"></img>
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button></>)}
        
        
      </header>
    </div>
  );
}

export default App;
