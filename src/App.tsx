import { useEffect, useState } from 'react'
import './App.css'
import Quotes from './components/Quotes'
import { Routes, Route, Link } from "react-router-dom"
import SingleQuote from './components/SingleQuote'

export type Quote = {
  id: number
  author: string
  quote: string
  image: string
  age: string
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [clickedQuote, setClickedQuote] = useState<Quote[]>([])

  console.log(clickedQuote)

  useEffect(() => {
    fetch('http://localhost:4000/quotes')
      .then(resp => resp.json())
      .then(quotesFromServer => setQuotes(quotesFromServer))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Quotes quotes={quotes} setClickedQuote={setClickedQuote} />} />
        <Route path="/:id" element={<SingleQuote clickedQuote={clickedQuote} />} />
      </Routes>
    </div>
  )
}

export default App
