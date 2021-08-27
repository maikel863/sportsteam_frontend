import { useState } from 'react';

function PlayerForm({ addPlayer}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');
    const [rating, setRating] = useState('');
    const [rookie, setRookie] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleAgeChange(e) {
        setAge(e.target.value);
    }
    function handlePositionChange(e) {
        setPosition(e.target.value);
    }
    function handleRatingChange(e) {
        setRating(e.target.value);
    }
    function handleRookieChange(e) {
        setRookie(e.target.value);
    }

    function handleAddPlayer() {
        const player = {
            name: name,
            age: age,
            position: position,
            rating: rating,
            rookie: rookie,
            team_id: ""
        }

        addPlayer(player);
    }

    return (
        <div className="player-container">
            <form className="player-form">

                <input className="form-control" placeholder="Name" onChange={handleNameChange} /><br />
                <input className="form-control" placeholder="Age" onChange={handleAgeChange} /><br />
                <input className="form-control" placeholder="Position" onChange={handlePositionChange} /><br />
                <input className="form-control" placeholder="Rating" onChange={handleRatingChange} /><br />
                <input className="form-control" placeholder="Rookie" onChange={handleRookieChange} /><br />

            </form>
        </div>
    );
}

export default PlayerForm;