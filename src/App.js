import './App.css';
import { JugadoresSorteo } from "../src/componentes/jugadores"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <JugadoresSorteo/>
        </div>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
