// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// creating a function "creatTab" and passing argument "topic" 
function createTab(topic){

    // creating a variable "tab" and also creating a new element "div" 
    const tab = document.createNewElement('div')

    // giving class name
    tab.classList.add('tab')

    // assigning text content
    tab.textContent = 'topic'

    return tab
}

// console.log(creatTabs())

const topicsDiv = document.querySelector('.topics')     //creating "topicsDiv"variable for the".topics div"
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( success =>{
    // console.log(success);                      //to check whether pulling the data or not
    const topicsArray = success.data.topics    //"topicsArray" variable created to store data derived from the link
    topicsArray.forEach(element => {   //it loops through each element in "topicsArray" variable
    const newTab = createTab(element)   //creating new variable and passing "createTabs" variable and creates a new tab which will be appended in "topicsDiv"
    topicsDiv.appendChild(newTab)       //it will append "newTab" into topicsDiv
    })      
})
.catch(failure => {
    // console.log(failure)
})