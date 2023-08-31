import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from "./PlayerList";

function App() {
  return (
    <div className="App">
      {/* Placing the created player list to be rendered */}
      <PlayerList/>
    </div>
  );
}

export default App;
