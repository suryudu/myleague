import React,{useState} from 'react'

export default function Sequence(props) {
    const sequence=props.sequence;
    const setSequences=props.setSequences;
    const sequences=props.sequences;
    const [select,setSelect]=useState(false);

    const handleSequence=()=>{
        if(!select){
            // console.log(player.name)
            setSelect(true);
            setSequences(sequences=>[...sequences,sequence]);
            
            }else{
            setSelect(false);
            setSequences(sequences.filter(item=>item !== sequence))
            }
            

    }

    return (
        <>
        <div className="player grid-item" onClick={handleSequence} style={{border: select ? '5px solid red':''}}>
        <div className="player-name">{sequence}</div>
        
        
        </div> 
        </>
    )
}