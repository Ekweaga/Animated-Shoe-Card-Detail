import React,{useState,useEffect} from 'react'
import { shoes } from "./data"
import { motion } from 'framer-motion'
import love from "./Group 18.png"




function Detail(){
const [count,setCount] = useState(0);

const shoeContainer = {
    hidden:{
        opacity:0,
        x:-200
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            when:'beforeChildren',
            staggerChildren:0.4
        }
    }
}

const shoeContainers = {
    hidden:{
        opacity:0,
        
    },
    visible:{
        opacity:1,
        
        transition:{
            duration:0.5,
            when:'beforeChildren',
            staggerChildren:0.4
        }
    }
}

const shoe = {
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

const h1 ={
    hidden:{
        opacity:0,
        y:100
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5
        }
    }
}

const h2 ={
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

const loves = {
    hidden:{
        opacity:0,
        x:"-100vw"
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5
        }
    }
}
const p = {
    hidden:{
        opacity:0,
       y:100
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            delay:0.8
        }
    }
}

const balls = {
    hidden:{
        opacity:0,
        x:-50,
        rotate:[0]
    },
    visible:{
        x:0,
        opacity:1,
        rotate:[360,0],
        transition:{
            duration:0.4
        }
    }
}

const btn ={
    hidden:{
        opacity:0,
        y:100
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            delay:0.8
        }
    }
}
const increase = ()=>{
  setCount(count + 1)
}
    const Shoe = ()=>{
        return(
            <>
        
    
                <motion.div style={{height:'400px',background:`${shoes[count].background}`,borderRadius:'20px',marginTop:'-10px'}} variants={shoeContainer} initial="hidden" animate="visible">
                   <motion.div variants={shoe}><img src={`${shoes[count].image}`} alt="shoe"/></motion.div> 
    
                </motion.div>
    
    
                <div style={{background:'white',zIndex:33,marginTop:'-30px',borderRadius:'20px',padding:'20px',height:'350px'}} >
                    <motion.div style={{display:'flex',justifyContent:'space-between',padding:''}} variants={shoeContainers} initial="hidden" animate="visible">
                       <div> <motion.h2 style={{fontSize:'25px'}} variants={h1}>{shoes[count].name}</motion.h2>
                        <motion.h2 style={{fontWeight:'800',fontSize:'30px'}} variants={h2}>{shoes[count].price}</motion.h2></div>

                        <motion.div variants={loves}>
                            <img src={love} alt="love" width={40} height={40}/>
                        </motion.div>
                    </motion.div>
                    
                    <br/>
                    <motion.div variants={shoeContainers} initial="hidden" animate="visible">
                        <motion.p variants={p}>Based around a smooth comfort fit design coated with a sleek matte finish and look sharp and stay sharp, the boAt headway.</motion.p>
                    </motion.div><br/>
                    <div>
                        <h1 style={{fontWeight:'800',fontSize:'22px',marginBottom:'20px'}}>Choose a Color</h1>
                        <div style={{display:'flex',gap:'10px'}}>
                            <span onClick={()=>setCount(0)} style={{background:`${shoes[0].background}`,width:'60px',padding:'2px',borderRadius:'10px',height:'30px'}}></span>
                         <span onClick={()=>setCount(1)} style={{background:`${shoes[1].background}`,width:'60px',padding:'2px',borderRadius:'10px'}}></span> 
                         <span onClick={()=>setCount(2)} style={{background:`${shoes[2].background}`,width:'60px',padding:'2px',borderRadius:'10px'}}></span> <span onClick={()=>setCount(3)} style={{background:`${shoes[3].background}`,width:'60px',padding:'2px',borderRadius:'10px'}}></span></div>
                    </div><br/>

                    <motion.div style={{display:'flex',gap:'20px'}} variants={shoeContainers} initial="hidden" animate="visible">

                        <motion.div style={{border:'2px solid black',borderRadius:'50%',padding:'3px',width:'50px',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}} variants={balls}>1</motion.div>
                        <motion.div style={{border:'2px solid black',borderRadius:'50%',padding:'3px',width:'50px',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}  variants={balls}>2</motion.div>
                        <motion.div style={{border:'2px solid black',borderRadius:'50%',padding:'3px',width:'50px',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}  variants={balls}>3</motion.div>
                        <motion.div style={{border:'2px solid black',borderRadius:'50%',padding:'3px',width:'50px',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}  variants={balls}>4</motion.div>
                        <motion.div style={{border:'2px solid black',borderRadius:'50%',padding:'3px',width:'50px',height:'50px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}  variants={balls}>5</motion.div>
                    </motion.div><br/>

                    <motion.div style={{display:'flex',alignItems:'center',justifyContent:'center',justifyItems:'center',marginTop:'20px'}} variants={shoeContainers} initial="hidden" animate="visible">
                        <motion.button variants={btn} style={{background:'black',color:'white',width:'400px',padding:'3px',borderRadius:'13px',height:'50px',fontSize:'25px'}}>Buy now</motion.button>
                    </motion.div>

                </div>
    
          
            
            </>
        )
    }
    useEffect(()=>{
        <Shoe/>
        },[count])
    return(
        <>
        <Shoe/>
        </>
    )

  
  
}

export default Detail;