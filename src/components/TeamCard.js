import { Link } from "react-router-dom";

function TeamCard({ team }) {
    return (
        <div className="team-card">
           <Link to={`/players/${team.id}`}>
                <h2>{team.name}</h2>   
            </Link> 
        </div>
    );
}

export default TeamCard;