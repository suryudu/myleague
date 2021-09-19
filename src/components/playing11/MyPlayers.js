import React,{useState} from 'react';
import './MyPlayers.css';
import MyPlayer from './MyPlayer';
import Sequence from "./Sequence";
import axiosConfig from "../axiosConfig";
import {useHistory} from "react-router-dom";


export default function MyPlayers(props) {
    // console.log(props);
    
    const {team1,team2,playing11,id}=props.location.query;
    const history =useHistory();
    const [message,setMessage]=useState("Continue...");
   
    
    // console.log(playing11);
    // console.log(team1,team2);

    // const [keepers,setKeepers]=useState([]);
    // const [batsmens,setBatsmens]=useState([]);
    // const [allRounders,setAllRounders]=useState([]);
    // const [bowlers,setBowlers]=useState([]);
    const [sequenceValue,setSequenceValue]=useState();
    const [sequences,setSequences]=useState([]);
    const [sequenceStack,setSequenceStack]=useState(["2+3+3+3","1+3+3+4","1+4+2+4","2+4+2+3","2+5+1+3","3+3+2+3"]);
    

    
    
    const displayKeepers=(keeprs)=>{
        return playing11.map((player,key)=>{
            if(player.role === 'wk'){
                return <MyPlayer player={player} key={key} playing11={playing11} />
            }else{
                return null;
            }
        })
    }
    

    const displayBatMens=()=>{
        return playing11.map((player,key)=>{
            if(player.role === 'bat'){
                return <MyPlayer player={player} key={key} playing11={playing11} />
            }else{
                return null;
            }
        })
    }

    const displayAllRounders=()=>{
        return playing11.map((player,key)=>{
            if(player.role === 'all'){
                return <MyPlayer player={player} key={key} playing11={playing11} />
            }else{
                return null;
            }
        })
    }

    const displayBowlers=()=>{
        return playing11.map((player,key)=>{
            if(player.role === 'bowl'){
                return <MyPlayer player={player} key={key} playing11={playing11}  />
            }else{
                return null;
            }
        })
    }

    

    const displaySequences=()=>{
            return sequenceStack.map((sequence,key)=>{
                return <Sequence sequence={sequence} key={key} sequences={sequences} setSequences={setSequences} />
            })
    }

    

    const submitRanks=(e)=>{
        e.preventDefault();
        // const count=keepers.length+batsmens.length+allRounders.length+bowlers.length;
        // if(count !== 22){
        //     console.log("please select all players");
        // }else{
            const data={
                // keepers,
                // batsmens,
                // allRounders,
                // bowlers,
                // sequences,
                players:playing11,
                sequences,
                matchId:id
            }
            // console.log(data);
            axiosConfig
            .post("/storematchdata",data)
            .then(res=>{
                if(res.data){
                    setMessage(res.data);
                    setInterval(()=>{
                        history.push(`/generate/${id}`);
                    },2000)
                }
                   
            }).catch(err=>{
                console.log(err);
            })
        // }
        
    }

    const addSequence=()=>{
        setSequenceStack(sequenceStack=>[...sequenceStack,sequenceValue])
    }

    return (
        <>
            <div className="myplayers">
                <div className="match">
                    <h1>{team1} vs {team2}</h1>
                </div>
                <div className="players">
                    <div className="wk">
                        <h3>Wicket Keepers</h3>
                        <div className="squad grid-container" >
                            {displayKeepers()}
                        </div>
                    </div>
                    <div className="bm section">
                        <h3>Bats Men</h3>
                        <div className="squad grid-container">
                           {displayBatMens()}
                        </div>
                    </div>
                    <div className="ar section">
                        <h3>All Rounders</h3>
                        <div className="squad grid-container">
                            {displayAllRounders()}
                        </div>
                    </div>
                    <div className="bs section">
                        <h3>Bowlers</h3>
                        <div className="squad grid-container">
                            {displayBowlers()}
                        </div>
                    </div>
                    <div className="ar section">
                        <h3>Sequences</h3>
                        <div className="squad grid-container">
                            {displaySequences()}
                        </div>
                    </div> 
                    <div className="player grid-item" style={{marginLeft:'35%'}} >
                        <div className="player-name"><input type="text" style={{border:'none',outline:'none',fontSize:'20px',width:'200px'}} onChange={(e)=>setSequenceValue(e.target.value)} ></input></div>
                        <div><button style={{width:'50px',height:'30px',cursor:'pointer'}} onClick={addSequence}>add</button></div>
                    </div> 
                    
                </div>
            </div>
            <div className="rankingbutton">
                <button onClick={submitRanks}>{message}</button>
            </div>
        </>
    )
}