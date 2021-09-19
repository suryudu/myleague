import React,{useState} from 'react'

export default function MyPlayer(props) {
    const player=props.player;
    const {playing11}=props;
    const [vc,setVc]=useState(false);
    const [cap,setCap]=useState(false);
    const [dt,setDt]=useState(false);
    const [ndt,setNdt]=useState(false);
    // const [select,setSelect]=useState(false);
    // const setKeepers=props.setKeepers;
    // const keepers=props.keepers;
    // const batsmens=props.batsmens;
    // const setBatsmens=props.setBatsmens;
    // const allRounders=props.allRounders;
    // const setAllRounders=props.setAllRounders;
    // const bowlers=props.bowlers;
    // const setBowlers=props.setBowlers;

    // const handleSelect=()=>{
    //     if(player.role === 'wk'){
    //         if(!select){
    //         // console.log(player.name)
    //         setSelect(true);
    //         setKeepers(keepers=>[...keepers,player]);
            
    //         }else{
    //         setSelect(false);
    //         setKeepers(keepers.filter(item=>item.name !== player.name))
    //         }
       
    //     }else if(player.role === 'bat'){
    //         if(!select){
    //             // console.log(player.name)
    //             setSelect(true);
    //             setBatsmens(batsmens=>[...batsmens,player]);
                
    //             }else{
    //             setSelect(false);
    //             setBatsmens(batsmens.filter(item=>item.name !== player.name))
    //             }
    //     }else if(player.role === 'all'){
    //         if(!select){
    //             // console.log(player.name)
    //             setSelect(true);
    //             setAllRounders(allRounders=>[...allRounders,player]);
                
    //             }else{
    //             setSelect(false);
    //             setAllRounders(allRounders.filter(item=>item.name !== player.name))
    //             }
    //     }else if(player.role === 'bowl'){
    //         if(!select){
    //             // console.log(player.name)
    //             setSelect(true);
    //             setBowlers(bowlers=>[...bowlers,player]);
                
    //             }else{
    //             setSelect(false);
    //             setBowlers(bowlers.filter(item=>item.name !== player.name))
    //             }
    //     }
        
    // }


    // const ranking=()=>{
    //     if(player.role=== 'wk'){
    //         for(let i=0;i<keepers.length;i++){
    //             if(player.name === keepers[i].name){
    //                 return <div className="role">{i+1}</div>
    //             }
    //         }
    //         return <div className="role">{0}</div>
    //     }else if(player.role === "bat"){
            
    //         for(let i=0;i<batsmens.length;i++){
                
    //             if(player.name === batsmens[i].name){
    //                 return <div className="role">{i+1}</div>
    //             }
    //         }
    //         return <div className="role">{0}</div>
    //     }else if(player.role === "all"){
            
    //         for(let i=0;i<allRounders.length;i++){
                
    //             if(player.name === allRounders[i].name){
    //                 return <div className="role">{i+1}</div>
    //             }
    //         }
    //         return <div className="role">{0}</div>
    //     }else if(player.role === "bowl"){
         
    //         for(let i=0;i<bowlers.length;i++){
                
    //             if(player.name === bowlers[i].name){
    //                 return <div className="role">{i+1}</div>
    //             }
    //         }
    //         return <div className="role">{0}</div>
    //     }
    // }

    const handlevCap=()=>{
        if(!vc){
            let updateVc=playing11.find(item=>item._id === player._id);
            updateVc && (updateVc.isVc = true);
            setVc(true);
        }else{
            let updateVc=playing11.find(item=>item._id === player._id);
            updateVc && (updateVc.isVc = false);
            
            setVc(false);
        }
        
    }
    const handleCap=()=>{
        if(!cap){
            let updateCap=playing11.find(item=>item._id === player._id);
            updateCap && (updateCap.isCap = true);
            setCap(true);
        }else{
            let updateCap=playing11.find(item=>item._id === player._id);
            updateCap && (updateCap.isCap = false);
            
            setCap(false);
        }
    }
    const handleDt=()=>{
        if(!dt){
            let updateDt=playing11.find(item=>item._id === player._id);
            updateDt && (updateDt.inDt = true);
            setDt(true);
        }else{
            let updateDt=playing11.find(item=>item._id === player._id);
            updateDt && (updateDt.inDt = false);
            
            setDt(false);
        }
    }

    const handleNoDt=()=>{
        if(!ndt){
            let updateNdt=playing11.find(item=>item._id === player._id);
            updateNdt && (updateNdt.notInDt = true);
            setNdt(true);
        }else{
            let updateNdt=playing11.find(item=>item._id === player._id);
            updateNdt && (updateNdt.notInDt = false);
            
            setNdt(false);
        }
    }
    

    return (
        <><div>
           <div className="player grid-item" style={{border:"1px solid red",marginBottom:'10px'}}>
                <div className="player-name">{player.name}</div>
                <div className="role"><strong>{player.team}</strong></div>
                {/* {ranking()} */}
                
                
           </div> 
           <div style={{display:"flex"}} className="checkboxgroup">
               <div className="checkinput">
                    <input type="checkbox" className="checkboxes" onClick={handlevCap} />
                    <label>vCap</label>
               </div>
               <div className="checkinput">
                    <input type="checkbox" className="checkboxes"  onClick={handleCap} />
                    <label>Cap</label>
               </div>
               <div className="checkinput">
                    <input type="checkbox" className="checkboxes"  onClick={handleDt} />
                    <label>DT</label>
               </div>
               <div className="checkinput">
                    <input type="checkbox" className="checkboxes"  onClick={handleNoDt} />
                    <label>noDT</label>
               </div>
            
                
           </div>
            
           </div>

           

        </>
    )
}