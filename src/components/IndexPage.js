import TeamCard from "./TeamCard"
import { useEffect, useState } from "react";
import { rest } from "lodash";

function IndexPage() {
    const baseURL = "http://127.0.0.1:9393";
    
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/teams`)
        .then(r => r.json())
        .then(resTeams => {
            setTeams(resTeams);
        })
    }, []);

    const teamCards = teams.map((team) => <TeamCard key={team.id} team={team}/>);

    return (
        <div className="team-page">
            <div className="cell-rows">
                { teamCards }
            </div>
        </div>
    );
}

export default IndexPage;