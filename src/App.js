import './App.css';
import { JugadoresSorteo } from "../src/componentes/jugadores"

const initialPlayers = [
  {jugador: "Emma", id: 1},
  {jugador: "Brian", id: 2},
  {jugador: "Roswel", id: 3},
  {jugador: "Neger", id: 4},
  {jugador: "Beto", id: 5},
  {jugador: "Gaby", id: 6}
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <JugadoresSorteo initialPlayers={initialPlayers}/>
        </div>
      </header>
    </div>
  );
}

export default App;
