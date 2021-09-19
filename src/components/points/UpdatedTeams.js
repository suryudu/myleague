import React,{useState} from 'react';
import axiosConfig from "../axiosConfig";
import {useParams} from "react-router-dom";


export default function UpdatedTeams(props) {
    const {id} =useParams();
    const [message,setMessage]=useState("Updated Teams")
    const submitGenerate=(e)=>{
        e.preventDefault();
        
        
        axiosConfig
        .get(`/generateteamswithpoints/${id}`)
        .then(res=>{
            console.log(res.data)
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