import React,{useState} from 'react'


export default function PlayerPoints(props) {
    const player=props.player;
    const players=props.players;
    const [points,setPoints]=useState(player.pointEarned)

    
    
    const changePoints=(e,player)=>{
        setPoints(e.target.value);
        const pointEarned=parseInt(e.target.value);
       player={...player,pointEarned};
       
        const foundIndex=players.findIndex(x=>x._id===player._id);
     
        players[foundIndex]=player;


    }

    return (
        <>
                    <div className="grid-item">
                        <p>{player.name}</p>
                        <p className="team">{player.team}</p>
                        <input type="number" value={points} onChange={(e)=>changePoints(e,player)} style={{width:"40px",height:"20px",fontSize:"20px",padding:"2px",marginTop:"20px"}}/>
                    </div>
         </>
    )
}