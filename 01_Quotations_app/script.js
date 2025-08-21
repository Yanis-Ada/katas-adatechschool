
const QUOTE_FORM = document.getElementById('quoteForm')

QUOTE_FORM.addEventListener('submit', function (event){
    event.preventDefault()
    const TEXT = document.getElementById("citationInput").value;
    const AUTHOR = document.getElementById("nameInput").value;

    addQuote(TEXT, AUTHOR)
})



function addQuote(quote, author){
    const ADD_QUOTE = document.createElement("p")
    ADD_QUOTE.classList.add("text")
    ADD_QUOTE.innerText = `Citation :  ${quote}`

    const ADD_AUTHOR = document.createElement("p")
    ADD_AUTHOR.classList.add("author")
    ADD_AUTHOR.innerText = `Auteur.rice :  ${author}`

    const DIV = document.createElement('div')
    DIV.classList.add("quote")
    DIV.appendChild(ADD_QUOTE)
    DIV.appendChild(ADD_AUTHOR)

    const QUOTE_LIST = document.getElementById("quote-list")
    QUOTE_LIST.appendChild(DIV)

    
}


