import { useState } from 'react';
import "../componentes/jugadores.css"

export const JugadoresSorteo = ({initialPlayers}) => {

  const [players, setPlayers] = useState([]);
  const [visible, setVisible] = useState(true);
  const [reset, setReset] = useState(false)

  const mezclar = () => {

    setPlayers(initialPlayers.sort(()=> Math.round(Math.random())-1));
    console.log(players);
    setVisible(false);
    setReset(true);

  }

  const volver = () => {
      setReset(false);
      setVisible(true)
  }

    return(
        <>
            {visible ? 
            <button onClick={mezclar} className="boton">Sortear</button>
            :
            players.map((player)=>{

                return(
                    <div key={player.id}>
                        <p>Jugador: {player.jugador}</p>
                    </div>
                    )
                })}
            {reset && <button onClick={volver} className="boton">Reiniciar</button>}
        </>
    )
}