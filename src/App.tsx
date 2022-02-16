import { useEffect, useState } from 'react'
import './App.css'
import Quotes from './components/Quotes'
import { Routes, Route, Link } from "react-router-dom"
import SingleQuote from './components/SingleQuote'
import NewQuote from './components/NewQuote'

export type Quote = {
  id: number
  author: string
  quote: string
  image: string
  age: string
}

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [clickedQuote, setClickedQuote] = useState<Quote>()

  console.log(quotes)

  useEffect(() => {
    fetch('http://localhost:4000/quotes')
      .then(resp => resp.json())
      .then(quotesFromServer => setQuotes(quotesFromServer))
  }, [])

  return (
    <div className="App">
      <Link to={'/home'}> <h1 className="add-new-quote">ADD A NEW QUOTE</h1></Link>
      <Routes>
        <Route path="/" element={<Quotes quotes={quotes} setClickedQuote={setClickedQuote} />} />
        <Route path="/:id" element={<SingleQuote clickedQuote={clickedQuote} quotes={quotes} setQuotes={setQuotes} />} />
        <Route path="/home" element={<NewQuote quotes={quotes} setQuotes={setQuotes} />} />
      </Routes>
    </div>
  )
}

export default App
