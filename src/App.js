import './App.css';
import { JugadoresSorteo } from "../src/componentes/jugadores"

const initialPlayers = [
  {jugador: "Emma y Gaby", id: 1},
  {jugador: "Brian y Roswel", id: 2},
  {jugador: "Beto y Neger", id: 3},
  {jugador: "Eze y Gonza", id: 4}
  // {jugador: "Beto", id: 5},
  // {jugador: "Gaby", id: 6}
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
