import React,{useEffect,useState} from 'react';
import {useParams,useHistory} from "react-router-dom";
import "./Match.css";
import axiosConfig from "../axiosConfig";
import Player from "./Player";

export default function Match(props) {
    const {team1,team2}=useParams();
    const [players,setPlayers]=useState([])
    const [playing11,setPlaying11]=useState([]);
    const {id}=props.location.query;
  
    const history=useHistory();

    useEffect(()=>{
        axiosConfig
        .get(`/players/${team1}/${team2}`)
        .then(res=>{
            
            setPlayers(res.data);
            
        }).catch(err=>{
            console.log(err);
        })
    },[team1,team2])
// console.log(players)
    const team1Players=()=>{
        if(!players.length){
            return <h3>Loading...</h3>
        }else{
            return players.map((player,key)=>{
                if(player.team === team1){
                    return <Player player={player} key={key} setPlaying11={setPlaying11} playing11={playing11} />
                }else {
                    return null;
                }
            })
        }
    }

    const team2Players=()=>{
        if(!players.length){
            return <h3>Loading...</h3>
        }else{
            return players.map((player,key)=>{
                if(player.team === team2){
                    return <Player player={player} key={key} setPlaying11={setPlaying11} playing11={playing11} />
                }else {
                    return null;
                }
            })
        }
    }

    const counting=(team)=>{
        let count=0;
        for(let i=0;i<playing11.length;i++){
            if(playing11[i].team === team){
                
               count++;
            }
       }
       return count;
    }

    const submitPlaying11=(e)=>{
        e.preventDefault();
        counting();
        if(playing11.length !== 22){
            console.log("plaese add all players");
        }else{
            const team1Count=counting(team1);
            const team2Count=counting(team2);
            if(team1Count !== 11 ||team2Count !== 11 ){
                console.log("please add playing 11 players for each team");
            }else{
                 history.push({pathname:'/playing11',query:{playing11,team1,team2,id}})
            }
        }
        
    
    }

    return (
        <>
            <div className="teams">
                <div className="team1">
                    <div className="team-name">
                        <h1>{team1}</h1>
                    </div>
                    
                    <div className="players">
                        {team1Players()}
                    </div>
                </div>
                <div className="team2">
                    <div className="team-name">
                        <h1>{team2}</h1>
                    </div>
                    <div className="players">
                        {team2Players()}
                    </div>
                </div>
    
                
            </div>
                <div className="button">
                    <button onClick={submitPlaying11}>Continue...</button>
                </div>
        </>
    )
}