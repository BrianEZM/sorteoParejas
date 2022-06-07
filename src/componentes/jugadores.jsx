import { useState } from 'react';
import "../componentes/jugadores.css"

export const JugadoresSorteo = ({initialPlayers}) => {

  const [players, setPlayers] = useState([]);
  const [visible, setVisible] = useState(true);
  const [reset, setReset] = useState(false)

  const mezclar = () => {

    setPlayers(initialPlayers.sort(()=> Math.round(Math.random())-1));
    setVisible(false);
    setReset(true);
  }

    let pareja1 = [players[0], players[1]];
    let pareja2 = [players[2], players[3]];
    let pareja3 = [players[4], players[5]];

  const volver = () => {
      setReset(false);
      setVisible(true)
  }

//   RENDERIZADO
    return(
        <>
            {visible ? 
            <button onClick={mezclar} className="boton">Sortear</button>
            :
            pareja1.map((player)=>{
                return(
                    <div className='dupla' key={player.id}>
                        <p>Pareja 1: {player.jugador}</p>
                    </div>
                    )
                })
                }
            {!visible && pareja2.map((player)=>{
                return(
                    <div className='dupla' key={player.id}>
                        <p>Pareja 2: {player.jugador}</p>
                    </div>
                    )
                })}
            {!visible && pareja3.map((player)=>{
                return(
                    <div className='dupla' key={player.id}>
                        <p>Pareja 3: {player.jugador}</p>
                    </div>
                    )
                })}
            {reset && <button onClick={volver} className="boton">Reiniciar</button>}
        </>
    )
}