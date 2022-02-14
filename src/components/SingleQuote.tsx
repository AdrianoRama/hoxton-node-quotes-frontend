import { Quote } from "../App"
import "../App.css"


export default function SingleQuote({ clickedQuote }: any) {

    return <div className="single-quote">
        <img className="single-quote-img" src={clickedQuote.image} alt="" />
        <p className='single-quote-text'>{clickedQuote.quote}</p>
        <p className='single-quote-text quote-author'>{clickedQuote.author} <span className="single-quote-age">{clickedQuote.age}</span></p>
    </div>
}