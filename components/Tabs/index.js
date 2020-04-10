// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function createTabs(topic){

    // create new element
    const tab = document.createNewElement('div')

    // giving class name
    tab.classList.add('tab')

    // assigning text
    tab.textContent = 'topic'

    return tab
}



axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( success =>{
    // console.log(success);
    success.data.topics.forEach(topic => {
        // console.log(success);
        topic.appendChild(creatTabs(topic))
    })      
})
.catch(error => {
    console.log(error)
})