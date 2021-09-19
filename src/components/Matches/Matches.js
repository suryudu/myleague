import React,{useEffect,useState} from 'react';
import './Matches.css';
import MatchCard from './MatchCard';
import axiosConfig from '../axiosConfig';

function Matches(props) {
    const [matches,setMatches]=useState([]);
    useEffect(()=>{
        axiosConfig
        .get("/matches")
        .then(res=>{
            
            setMatches(res.data);
            
        }).catch(err=>{
            console.log(err);
        })
    },[])
    const dailyMatches=()=>{
        if(!matches.length){
            return <h1>Loading...</h1>
        }else{
            return matches.map((match,key)=>{
                return <MatchCard match={match} key={key} />
            })
        }
    }
    return (
        <>
        <div className="cards">
                {dailyMatches()}
        </div>
        </>
    )
}

export default Matches;



