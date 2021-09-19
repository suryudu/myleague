import React,{useState} from 'react'

export default function Player(props) {
    const player =props.player;
    const [select,setSelect]=useState(false);
    const setPlaying11=props.setPlaying11;
    const playing11=props.playing11

    const handleSelect=()=>{
        if(!select){
            // console.log(player.name)
            setSelect(true);
            setPlaying11(playing11=>[...playing11,player]);
            
        }else{
            setSelect(false);
            setPlaying11(playing11.filter(item=>item.name !== player.name))
            
            
        }
    }


    return (
        <>
        <div className="player" onClick={handleSelect} style={{border: select ? '5px solid red':''}}>
            <div>{player.name}</div>
            <div className="role"><strong>{player.role}</strong></div>  
        </div>
         
        </>
    )
}