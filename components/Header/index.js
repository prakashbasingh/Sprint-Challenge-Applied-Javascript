// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// creating creating
function Header() {
    const headerDiv = document.createElement('div')
    const spanFirst = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const spanSecond = document.createElement('span')
}
// element nesting
headerDiv.appendChild(spanFirst)
headerDiv.appendChild(headerH1)
headerDiv.appendChild(spanSecond)

// adding class name
headerDiv.classList.add('header')
spamFirst.classList.add('date')
spanSecond.classList.add('temp')

