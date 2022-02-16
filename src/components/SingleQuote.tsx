import { Quote } from "../App"
import "../App.css"


export default function SingleQuote({ clickedQuote, quotes, setQuotes }: any) {

    let id = clickedQuote.id

    console.log(id)

    function deleteQuote() {
        return fetch(`http://localhost:4000/quotes/${id}`, {
            method: 'DELETE'
        })
    }

    function removeQuote() {
        let update = [...quotes]
        update = update.filter(quote => quote.id !== clickedQuote.id)
        setQuotes(update)
    }

    return <div className="single-quote">
        <img className="single-quote-img" src={clickedQuote.image} alt="" />
        <p className='single-quote-text'>{clickedQuote.quote}</p>
        <p className='single-quote-text quote-author'>{clickedQuote.author} <span className="single-quote-age">{clickedQuote.age}</span></p>
        <button onClick={() => {
            deleteQuote()
            removeQuote()
        }}>Delete Quote</button>
    </div>
}