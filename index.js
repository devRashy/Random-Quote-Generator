const displayQuoteBtn = document.querySelector('.action__btn')
const displayQuote = document.querySelector('.display__quote')
const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const displayQuoteHandler = () => {
    try {
      const randomQuote  = fetch(url)
    .then((response) => response.json())
    .then ((data) => {
        console.log(data.message)
        displayQuote.textContent = data.message
    })
}catch(error){
        console.log(error)
    }
console.log('i got it')
}

displayQuoteBtn.addEventListener('click',displayQuoteHandler)