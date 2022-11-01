import React from 'react'

export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters= () =>{
        setCharacters(null)
    }
  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='btn-search' onClick={resetCharacters}> Volver a la Home</span>
        <div className='container-characters'>
            {characters.map((character,index)=>(
                <div className='character-container' key="index">
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name} </h3>
                        <h4>{character.status === 'Alive' ? (
                            <>
                            <span className='alive'>Alive</span>
                            </>
                        ):(
                            <>
                            <span className='dead'>
                                Dead
                            </span>
                            </>
                        )}</h4>
                        <p>
                            <span className='text-grey'>Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                        <span className='text-grey'>Especie: </span>
                            <span>{character.species}</span>

                        </p>
                    </div>
                    
                </div>
                
            ))}
        </div>
    </div>
  )
}
