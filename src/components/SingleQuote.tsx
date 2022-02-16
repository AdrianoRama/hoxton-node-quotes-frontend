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

    function createQuote(author: string, age: string, image: string, quote: string) {
        fetch(`http://localhost:4000/quotes/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                author: author,
                age: age,
                image: image,
                quote: quote
            })
        }).then(function (newquote) {
            const newQuotes = JSON.parse(JSON.stringify(quotes))
            newQuotes.push(newquote)
            setQuotes(newQuotes)
        })
    }

    function onSubmit(e: any): void {
        e.preventDefault()
        const quote = e.target.quote.value
        const author = e.target.author.value
        const image = e.target.image.value
        const age = e.target.age.value

        console.log(quote)

        createQuote(author, age, image, quote)
    }

    return (<>
        <div className="single-quote">
            <img className="single-quote-img" src={clickedQuote.image} alt="" />
            <p className='single-quote-text'>{clickedQuote.quote}</p>
            <p className='single-quote-text quote-author'>{clickedQuote.author} <span className="single-quote-age">{clickedQuote.age}</span></p>
            <button className="delete-quote" onClick={() => {
                deleteQuote()
                removeQuote()
            }}>Delete Quote</button>
        </div><div className="form-container">

            <form className="quote-form" onSubmit={(e) => {
                onSubmit(e)

            }}><h1 className="edit-quote">Edit Quote</h1>
                <input name="author" placeholder="Author" />
                <input name="age" placeholder="Age" />
                <input name="image" placeholder="Image url" />
                <textarea name="quote" placeholder="Write something..." rows={10} cols={20} />
                <button className="quote-btn">EDIT QUOTE</button>
            </form></div></>
    )


}