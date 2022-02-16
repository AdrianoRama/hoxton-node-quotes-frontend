import { Quote } from "../App"


type Props = {
    quotes: Quote[]
    setQuotes: Function
}

export default function NewQuote({ quotes, setQuotes }: Props) {

    function createQuote(author: string, age: string, image: string, quote: string) {
        fetch('http://localhost:4000/quotes', {
            method: 'POST',
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

    return (
        <div className="form-container">
            <form className="quote-form" onSubmit={(e) => {
                onSubmit(e)

            }}>
                <input name="author" placeholder="Author" />
                <input name="age" placeholder="Age" />
                <input name="image" placeholder="Image url" />
                <textarea name="quote" placeholder="Write something..." rows={10} cols={20} />
                <button className="quote-btn">ADD QUOTE</button>
            </form></div>
    )
}
