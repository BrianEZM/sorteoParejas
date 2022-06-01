
import { useState, useEffect } from 'react';

const initialPlayers = [
    {jugador: "Emma", id: 1},
    {jugador: "Brian", id: 2},
    {jugador: "Roswel", id: 3},
    {jugador: "Neger", id: 4},
    {jugador: "Beto", id: 5},
    {jugador: "Gaby", id: 6}
  ]

export const JugadoresSorteo = () => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    
    setPlayers(initialPlayers.sort(()=> Math.round(Math.random())-1))

    console.log(players);
  }, [players])

  const renderSorteado = players.map((player)=>{
    return(
        <div key={player.id}>
            <p>{player.jugador}</p>
            <p>{player.id}</p>
        </div>
        )
    })

    return(
        <>
        {renderSorteado}
        </>
    )
}