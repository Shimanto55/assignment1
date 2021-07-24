import { useState } from 'react';
import './App.css';
import Players from './Component/Players';
import SelectedPlayers from './Component/SelectedPlayers';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cart, setCart] = useState([])

  const selectedPlayers = (players) => {
    const newcart = [...cart, players]
    setCart(newcart);
    

    // const cartShow = (players) => {
    //   <div>
    //     <img src={players.image} alt="sorry"></img>
    //     <h5>Player Name: {players.title}</h5>
    //     <h6>Description: {players.description}</h6>
    //     <p>Sallary: {players.price}</p>
    //   </div>
    // }
    // cartShow()
  }
  return (
    <div className="App container">

      <SelectedPlayers cart={cart}></SelectedPlayers>

      <div className="row">
        <Players selectedPlayers={selectedPlayers}></Players>
      </div>

    </div>
  );
}

export default App;
