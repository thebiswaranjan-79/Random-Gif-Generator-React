import React, { useState } from 'react'

const Random = () => {

 const[gif, setgif] = useState('');
 const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 function clickHandler(){

 }

  return (
    <div className='w-1/2 h-[450px] bg-green-400 rounded-lg border border-black 
                    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline font-semibold uppercase '>Random Gif</h1>
      <img src={gif} width="450"></img>
      <button className='w-10/12 bg-yellow-500 text-lg rounded-lg py-2 '
              onClick={clickHandler}>

              Generate
      </button>
    </div>
  )
}

export default Random