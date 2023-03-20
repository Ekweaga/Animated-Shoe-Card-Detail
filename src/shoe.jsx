import React,{useState} from "react"
import { shoes } from "./data"
import { motion } from 'framer-motion'
import nike from "./nike.png"
import cart from "./Group 19.png"
import search from "./chevron-left.png"
import banner from "./Group 48095695.png"
import Header from "./head"
import Link from 'react-router-dom'



function Shoe(){

    const shoeAnimate = {
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                duration:0.5,
                when:"beforeChildren",
                staggerChildren:0.45
            }
        }
    }
      const banners ={
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                duration:0.5
            }
        }}

        const imgAnimate={
            hidden:{
                opacity:0,
                scale:0.1,
                x:100,
                rotate:[0]
            },
            visible:{
                x:0,
                scale:1,
                opacity:1,
                rotate:[360,0],
                transition:{
                    duration:0.5
                }
            }
        }

        const h3 ={
            hidden:{
                opacity:0,
                x:50
            },
            visible:{
                x:0,
                opacity:1,
                transition:{
                    duration:0.5
                }
            }
        }


        const h2 ={
            hidden:{
                opacity:0,
                x:-100
            },
            visible:{
                x:0,
                opacity:1,
                transition:{
                    duration:0.5
                }
            }
        }

    return(
        <>
          <Header/>
        <motion.div style={{padding:'10px',marginTop:'-50px'}} initial={{opacity:0,x:-200}} animate={{opacity:1,x:0,y:0}} transition={{duration:0.6}} >
<img src={banner} width={400} height={250}/>
        </motion.div>
        <div>
            <h1 style={{fontWeight:'bold',padding:'2px',fontSize:'30px',marginLeft:'20px'}}>Newly Arrived</h1>
        </div>
        <div>
            <div style={{padding:'20px',color:'white',display:'grid',gridTemplateColumns:'auto auto',gap:'20px'}}>
                {
                    shoes.map((shoe,index)=>{
                        return(
                            <motion.div style={{background:`${shoe.background}`,marginTop:'0px',borderRadius:'15px',padding:'10px'}} key={index} variants={shoeAnimate} initial="hidden" animate="visible" viewport={{amount:1}} >
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
                                    <div style={{marginLeft:'10px'}}>
                                        <motion.h3 style={{fontWeight:'',padding:'0px',fontSize:'20px'}} variants={h3}>{shoe.name}</motion.h3>
                                        <span>{shoe.brand}</span>
                                     
                                    </div>
                                    <motion.div >
                                    <img src={shoe.add} width={20} height={20} marginRight={30}/>
                                    </motion.div>
                                </div>
                                <motion.div variants={imgAnimate} style={{marginRight:'-40px'}}>
                               <img src={shoe.image} width={450} height={350} marginLeft={30}/> </motion.div>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                    <h2 style={{fontWeight:'bold',padding:'2px',fontSize:'30px',marginRight:'0px'}}>{shoe.review}</h2>
                                   <motion.h2 style={{fontWeight:'bold',padding:'2px',fontSize:'20px',marginRight:'0px'}} variants={h2}>{shoe.price}</motion.h2>
                                   
                                   </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Shoe