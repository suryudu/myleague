import React from 'react';
import './Card.css';
import {useHistory} from 'react-router-dom';




export default function MatchCard(props) {
   
    const match=props.match;
    const history=useHistory();
    const id=match._id;
    const team1=match.team1;
    const team2=match.team2;
   

    const handleClick=()=>{
        // history.push({pathname:`/players/${match.team1}/${match.team2}`,query:{id}});
        history.push(`/adminroute/${id}/${team1}/${team2}`);
    }
   

    return (
        <>
            <div className="card" onClick={handleClick}>
                <div className="team1">
                    <h3 style={{color:'yellow'}}>{match.team1}</h3>
                </div>
                <div className="date">
                    <p>{match.time}</p>
                    <p><strong>{match.status}</strong></p>
                </div>
                <div className="team2">
                    <h3 style={{color:'blue'}}>{match.team2}</h3>
                </div>
            </div>
        
        </>
    )
}