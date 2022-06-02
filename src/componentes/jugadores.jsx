import { useState } from 'react';
import "../componentes/jugadores.css"

export const JugadoresSorteo = ({initialPlayers}) => {

  const [players, setPlayers] = useState([]);

  const mezclar = () => {

    setPlayers(initialPlayers.sort(()=> Math.round(Math.random())-1));
    console.log(players);
  }

    return(
        <>
            <button onClick={mezclar} className="boton">Sortear</button>
            {players.map((player)=>{
                return(
                    <div key={player.id}>
                        <p>Jugador: {player.jugador}</p>
                    </div>
                    )
                })}
        </>
    )
}