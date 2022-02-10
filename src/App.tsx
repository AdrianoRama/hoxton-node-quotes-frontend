import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/quotes')
      .then(resp => resp.json())
      .then(quotesFromServer => setQuotes(quotesFromServer))
  }, [])

  console.log(quotes)

  type Quote = {
    id: number
    author: string
    quote: string
  }

  return (
    <div className="App">
      <div className="container">
        {quotes.map(quote => {
          return (

            <div className="quote quote-border quoted">
              <p className='quote-text'>{quote.quote}</p>
              <p className='quote-text quote-author'>{quote.author}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
