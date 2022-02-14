import { Link } from "react-router-dom"
import { Quote } from "../App"


type Props = {
    quotes: Quote[]
    setClickedQuote: Function
}

export default function Quotes({ quotes, setClickedQuote }: Props) {
    return (
        <div className="container">
            {quotes.map(quote => {
                return (
                    <Link onClick={() => { setClickedQuote(quote) }} to={`/${quote.id}`}>
                        <div className="quote quote-border quoted">
                            <p className='quote-text'>{quote.quote}</p>
                            <p className='quote-text quote-author'>{quote.author}</p>
                        </div></Link>
                )
            })}
        </div>
    )
}