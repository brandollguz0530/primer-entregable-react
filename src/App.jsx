import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"



const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {

    const getRandomPhrases = (listItems) => {
      const randomIndex =Math.floor(Math.random() * listItems.length)
      return listItems[randomIndex]
    }

    const [quote, setQuote] = useState(getRandomPhrases(db))
    const [bgImage, setBgImages] = useState(getRandomPhrases(images))

    const handleNewQuote = () => {
      setQuote(getRandomPhrases(db))
      setBgImages(getRandomPhrases(images))
    }

  return (
    <div className={`App ${bgImage}`}>
      
      <ContainerInfo quote={quote}  handleNewQuote={handleNewQuote} />

      
     
      
    </div>
  )
}

export default App
