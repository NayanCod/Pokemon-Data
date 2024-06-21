import { useEffect, useState } from "react";
import CardsContainer from "./components/CardsContainer";

function App() {
  const [cardsList, setCardsList] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon");

    const getPokiData = async(url) => {
      const data = await fetch(url);
      const json = await data.json();
      setNextUrl(json.next);
      setCardsList(prevList => [...prevList, ...json.results]);
    }

    useEffect(() => {
      getPokiData(nextUrl);
    }, []);

    const loadMore = () => {
      if (nextUrl) {
        getPokiData(nextUrl); // Fetch next page of data
      }
    };
    if(!cardsList) return null
  return (
    <> 
      <h1 className="text-4xl font-bold my-3 text-center">Pokimon Data</h1>
      <CardsContainer cardsList={cardsList}/>
      
      <button onClick={loadMore} className='my-4 bg-blue-500 block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto cursor-pointer'>Load more</button>
    </>
  )
}

export default App;
