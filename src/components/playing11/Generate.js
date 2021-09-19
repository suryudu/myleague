import React,{useState} from 'react';
import axiosConfig from "../axiosConfig";
import {useParams} from "react-router-dom";


export default function Generate(props) {
    const {id} =useParams();
    const [message,setMessage]=useState("Generate Teams")
    const submitGenerate=(e)=>{
        e.preventDefault();
        
        const matchId=id;
        axiosConfig
        .get(`/generateTeams/${matchId}`)
        .then(res=>{
            setMessage(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
        <div className="rankingbutton">
        <button onClick={submitGenerate} >{message}</button>
            </div>
        </>
    )
}