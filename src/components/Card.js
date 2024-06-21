import React, { useEffect, useState } from 'react'

const Card = ({data}) => {
    const [cardData, setCardData] = useState();
    const [audio, setAudio] = useState();
    const {name, url} = data;
    const getCardData = async() => {
        const res = await fetch(url);
        const json = await res.json();
        setCardData(json);
    }

    useEffect(()=>{
        getCardData();
    }, []);

    const handlePlay = () => {
        const cryUrl = cardData?.cries?.legacy;
        if (cryUrl) {
            const audioElement = new Audio(cryUrl);
            audioElement.play();
            setAudio(audioElement);
          }
    }

    if(!cardData) return null
  return (
    <div className='w-44 h-full border-b-2 border-gray-500 text-center rounded-lg shadow-md mt-3'>
        <img alt='card-img' className='w-full p-3 hover:scale-105 duration-150' src={cardData?.sprites?.front_shiny}/>
        <h1 className='font-bold w-full bg-yellow-200 py-1 text-xl'>{name.toUpperCase()}</h1>
        <p onClick={handlePlay} className='cursor-pointer bg-gray-100 hover:bg-gray-200 py-1 shadow-md rounded-b-xl'>{name}'s cry</p>
    </div>
  )
}

export default Card