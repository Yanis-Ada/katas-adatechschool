const form = document.getElementById("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    submitForm()
})

function submitForm(){
    const text = document.getElementById("inputQuotation")
    const author = document.getElementById("inputAuthor")
    addQuote(quote.value, author.value)
    console.log(text.value)
    console.log(author.value)
}

function addQuote(quote, author){
    let paragraphText = document.createElement("p")
    let paragraphAuthor = document.createElement("p")
    paragraphQuote.classlist.add("text")
    paragraphAuthor.classList.add("author")

    paragraphQuote.innerText = quote
    paragraphAuthor.innerText = author

    let divQuote = document.createElement("div")
    divQuote.className = "quote"

    let quoteList = document.getElementById("quote-list")

    divQuote.appendChild(paragraphQuote)
    divQuote.appendChild(paragraphAuthor)
    quoteList.appendChild(divQuote)
}