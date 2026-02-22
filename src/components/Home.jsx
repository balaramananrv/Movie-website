import React, { useEffect, useState } from 'react'
import t69 from '../assets/t69.jpg';
import t68 from '../assets/t68.webp';
import t67 from '../assets/t67.jpg';
import t66 from '../assets/t66.avif';
import t65 from '../assets/t65.jpg';
import t64 from '../assets/t64.jpg';
import t63 from '../assets/t63.jpg';
import t62 from '../assets/t62.jpg';
import t61 from '../assets/t61.jpeg';
import t60 from '../assets/t60.jpg';
import "./Home.css"

export default function Home() {

    const Arrmovies=[t69,t68,t67,t66,t65,t64,t63,t62,t61,t60]
    const [count, setCount] = useState(0);

    useEffect(()=>{
      const interval=setInterval(()=>{
        setCount((pre)=>(pre+1)%Arrmovies.length);
      },3000)

       return()=>clearInterval(interval)
    });

    const pre=()=>{
        setCount((prev)=>{
            return prev===0?Arrmovies.length-1:prev-1;
        })
    }
    const next=()=>{
        setCount((nex)=>{
            return nex===Arrmovies.length-1 ?0:nex+1;
        })
    }
  return (
    
    <div className='show'>
        <img src={Arrmovies[count]} alt="" />
        <div className='parent-btn'>
            <button className='btna'onClick={pre} ><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#f5390eff"><path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg></button>
            <button className='btna' onClick={next}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#f5390eff"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg></button>
        </div>
    </div>
  )
}
