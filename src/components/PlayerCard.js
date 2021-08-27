function PlayerCard({ player, removePlayer, showDeleteBtn }) {

    function handleRemovePlayer() {
        removePlayer(player.id);
    }

    return (
        <div className="player-card">
            <h3>{player.name}</h3>
            <p>Age: {player.age} Position: {player.position} Rating: {player.rating} Rookie: {player.rookie} <button className={showDeleteBtn ? "btn btn-danger show" : "btn btn-danger hide"} onClick={handleRemovePlayer} >Delete</button></p>
        
        </div>
    );
}

export default PlayerCard;