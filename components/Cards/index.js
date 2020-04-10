// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// creating Markup for card using function 
function createCard(object){
    // creating elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authorImage = document.createElement('img')
    const authorNameSpan = document.createElement('span')

    //structuring the elements
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(authorImage)
    author.appendChild(authorNameSpan)

    //giving class name/attributes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    authorImage.src = object.authorPhoto

    //setting content to the tags element 
    headline.textContent = object.headline
    authorNameSpan.textContent = `By ${object.authorName}`


    return card
}
// console.log(createCard())

const cardContainer = document.querySelector('cards-container')

// creating article
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( success =>{
    // console.log(success)
    // accessing all article
    const articles = success.data.articles
    // accessing each topics array of articles
    const jsArticles = articles.javascript
    const bootStrapArticles = articles.bootstrap
    const techArticles = articles.technology
    const jqueryArticles = articles.jquery
    const nodeArticles = articles.node

    // now iterating through each array and passing through new article
    jsArticles.forEach(article =>{
        cardsContainer.appendChild(creatCard(article))
    })

    bootStrapArticles.forEach(article =>{
        cardsContainer.appendChild(creatCard(article))
    })

    techArticles.forEach(article =>{
        cardContainer.appendChild(creatCard(article))
    })

    jqueryArticles.forEach(article =>{
        cardContainer.appendChild(creatCard(article))
    })

    nodeArticles.foeEach(article =>{
        cardContainer.appendChild(creatCard(article))
    })

})
.catch(failure =>{
    // console.log(failure)
})

