import React,{useEffect,useState} from 'react';
import axiosConfig from "../axiosConfig";
import "../AdminRoute.css";
import PlayerPoints from "./PlayerPoints";
import { useParams,useHistory } from 'react-router-dom';


export default function UpdatePoints(props) {
    const {id}=useParams();
    const [players,setPlayers]=useState([]);
    const [structures,setStructures]=useState([]);
    const [message,setMessage]=useState("Submit");
    const history=useHistory();
    useEffect(()=>{
        axiosConfig
        .get(`/fetchmatchdata/${id}`)
        .then(res=>{
            console.log(res.data[0]);
            if(res.data[0]){
                setPlayers(res.data[0].players);
                setStructures(res.data[0].structures);
            }else{
                console.log("no data")
            }
            
        }).catch(err=>{
            console.log(err.message)
        })
    },[id])
// console.log(wicketKeepers,batsmans,allRounders,bowlers)
    const displayPlayers=(players)=>{
        if(!players.length){
            return <h2>Loading...</h2>
        }else{
            return players.map((player,key)=>{
                return <PlayerPoints player={player} players={players} key={key} />
            })
        }
    }

    const clickHandler=(e)=>{
        e.preventDefault()
        const data={
            players,
            structures,
            matchId:id
        }
        axiosConfig
        .post("/storematchdata",data)
        .then(res=>{
            setMessage(res.data);
            setTimeout(()=>{
                history.push(`/updatedteams/${id}`)
            },1000)
        }).catch(err=>{
            console.log(err.message);
        })
        console.log(data);
    }

    return (
        <>
            <h1 style={{textAlign:"center",marginBottom:"30px"}}>Update Player points</h1>
            
            
           
            <div className="updatepoints">
                
                <div className="grid-container">
                
                {displayPlayers(players)}
                </div>
            </div>
            <div className="adminbutton">
                <button onClick={clickHandler}>{message}</button>
            </div>
        </>
    )
}