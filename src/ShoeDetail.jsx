import React,{useState,useEffect} from "react"
import { shoes } from "./data"
import { motion } from 'framer-motion'
import nike from "./nike.png"
import cart from "./Group 19.png"
import search from "./chevron-left.png"
import banner from "./Group 48095695.png"


function ShoeDetail (){
    const [count,setCount] = useState(0);

const increase = ()=>{
  setCount(count + 1)
}
   

    useEffect(()=>{
        return(
            <>
               <div>
        
        <div style={{height:'400px',background:`${shoes[count].background}`,borderRadius:'20px',marginTop:'-10px'}}>
            <img src={`${shoes[count].image}`} alt="shoe"/>
    
        </div>
    
    
        <div></div>
    
    </div>
            </>
        )
    },[count])
}

export default ShoeDetail;