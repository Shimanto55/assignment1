import React from 'react';
import Fakedata from './Fakedata.json'
import PlayerDetails from './PlayerDetails';

const Players = (props) => {
    const selectedPlayers= props.selectedPlayers;
    const [players, setPlayers] = React.useState(Fakedata);
    return (
        <div >
            {
                players.map(players=> <PlayerDetails players={players} selectedPlayers={selectedPlayers}></PlayerDetails>)
            }
        </div>
    );
};

export default Players;