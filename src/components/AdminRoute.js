import React from 'react';
import "./AdminRoute.css";
import {Link,useParams} from "react-router-dom"

export default function AdminRoute(props) {
    
    const {id,team1,team2}=useParams();
    
   
    return (
        <>
        <div className="adminbutton">
        <Link to={{pathname:`/updatepoints/${id}`}}><button>points update</button></Link><br />
            <Link to={{pathname:`/players/${team1}/${team2}`,query:{id}}}><button>team select</button></Link>
        </div>
            
        </>
    )
}