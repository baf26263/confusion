import { Card } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from "axios"


const Characters = () => {

  const [url, setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=13469789&apikey=4459ff8a28f75db75d9c7eac0eb97c93&hash=384b7e90a155d9ab982a33714342c09f")
  const [item, setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  return (
    <>
      <div className="header">
        <div className='bg'>
          <img src="/assets/images/Comic.jpg" alt="" />
        </div>
        <div className='search-bar'>
            <img src="" alt="" />
            <input type="search" placeholder='Search Here' 
            className='search'/>
        </div>
        <div className="content">
          
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
        </div>
      </div>
    </>
  )
}

export default Characters

