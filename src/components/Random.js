import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

 const[gif, setgif] = useState('');


async function fetchData(){
     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
     const {data} = await axios.get(url);
     const imageSource = data.data.images.downsized_large.url;
     setgif(imageSource);
}

useEffect(()=>{
    fetchData();
}, [])

 function clickHandler(){
        fetchData();
 }

  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black 
                    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline font-semibold uppercase mt-[15px] '>Random Gif</h1>
      <img src={gif} width="450"></img>

      <button className='w-10/12 bg-yellow-500 text-lg rounded-lg py-2 mb-[15px] '
              onClick={clickHandler}>

              Generate
      </button>
    </div>
  )
}

export default Random
