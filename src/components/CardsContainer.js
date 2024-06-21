import React, { useEffect, useState } from 'react'
import Card from './Card';

const CardsContainer = ({cardsList}) => {
  const [searchText, setSearchText] = useState("");
  const [filterCards, setFilterCards] = useState([]);

  useEffect(()=>{
    setFilterCards(cardsList);
  }, [cardsList]);

  const handleSearch = (e) => {
    const searchtext = e.target.value.toLowerCase();
    setSearchText(searchtext);
    const filteredCards = cardsList.filter((card) => card.name.toLowerCase().includes(searchtext));
    setFilterCards(filteredCards);
  };
  

    return (
    <div className='w-full'>
    <div className='w-[35%] mx-auto'>
      <input type='text' className='py-2 px-3 border border-gray-700 outline-none w-full rounded-lg' value={searchText} onChange={handleSearch} placeholder='Search by name...'/>
    </div>
    <div className='flex flex-wrap gap-3 ml-4 my-4'>
    {
        filterCards.map((card, index) => (<Card key={index} data={card} />))
    }
    </div>
    </div>
  )
}

export default CardsContainer;