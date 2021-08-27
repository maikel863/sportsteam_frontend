import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import PlayerForm from "./PlayerForm";

function PlayerPage() {
    const pathName = window.location.pathname;
    const teamId = pathName.split('/')[2];
    const baseURL = "http://127.0.0.1:9393";

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}//players/${teamId}`)
        .then(r => r.json())
        .then(resPlayers => {
            setPlayers(resPlayers);
        })
    }, [teamId]);

    const playerCards = players.map((player) => <PlayerCard key={player.id} player={player} destroyPlayer={destroyPlayer} />);

    function addPlayer(player) {
        player.team_id = teamId;

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        };

        fetch(`${baseURL}/players`, config)
        .then(r => r.json())
        .then(player => setPlayers([...players, player]))
    }

    function destroyPlayer(playerId) {
        fetch(`${baseURL}/players/${playerId}`, {method: 'DELETE'})
            .then(r => r.json())
            .then(() => setPlayers(players.filter(player => player.id !== playerId)))
    }

    return (
        <div className="player-page">
           <PlayerForm addPlayer={addPlayer}/>
           { playerCards } 
        </div>
    );
}

export default PlayerPage;