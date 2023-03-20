import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import nike from "./nike.png"
import cart from "./Group 19.png"
import search from "./chevron-left.png"
import banner from "./Group 48095695.png"


function Header(){

    const Animate = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.45,
                when:'beforeChildren'
            }
           
        }
    }
    const nik ={
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:0.5
            }
           
        }
    }
    const input = {
        hidden:{
            opacity:0,
            y:-100
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5
            }
           
        }
    }
  
    
    return(
        <>

        <motion.div variants={Animate} initial="hidden" animate="visible" style={{marginBottom:'20px'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',justifyItems:'between'}}>
                <motion.div variants={nik}><img src={search} width={50} height={60}/></motion.div>
                < motion.div variants={nik}><img src={nike} width={80} height={80}/></motion.div>
                <motion.div variants={nik}><img src={cart} width={90} height={80}/></motion.div>
            </div>

            <motion.div variants={input} style={{display:'flex',alignItems:'center',justifyContent:'center',justifyItems:'center',marginTop:'30px'}} >
                <input type="text" style={{border:'',width:'350px',padding:'10px',height:'40px',background:'#F2F2F2',borderRadius:'10px'}} placeholder="search"/>
            </motion.div>

        </motion.div>


        
        </>
    )
}

export default Header;