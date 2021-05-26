// Event Bubbling & Capturing

// document.querySelector('p').addEventListener('click', (eventPlaceholder) => console.log(eventPlaceholder))


//As a developer I want...

//a form to appear in place of the 'Add Emoji' button when the 'Add Emoji' button is clicked
//an emoji can be entered into the input, submitted, and added to the "Emoji Bank"
//an alert saying "Emoji Submitted!" whenever an emoji is submitted
//the form turns back into the 'Add Emoji' button once an emoji has been successfully submitted
//an emoji I click on turns into '🤪'


const addEmojiBtn = () => document.getElementById('add-button') 

document.addEventListener('DOMContentLoaded', init)
// selectedElement.addEventListener('typeOfEvent', callbackFunction)

function init(){
    // select elements from the DOM that we need 
    // const addEmojiBtn = document.getElementById('add-button') // function scope 
    //function scope 

    // add an event listener to the add emoji button
    // addEmojiBtn.addEventListener('click', (e) => showForm(e))
    addEmojiBtn().addEventListener('click', showForm)
}

function showForm(e){
 
    // alert('i was clicked!')
    // create the Parent element
    const newForm = document.createElement('form')
    newForm.innerHTML = `
        <input type="text" name="emoji" id="emoji-input">
        <input type="submit" value="submit">
    `
    // debugger 
    // create new elements (the form)
    // append the new elements
    const area = document.getElementById('add-emoji-area')
    area.append(newForm)
    // hide the button 
    // e.target.remove()
    e.target.style.display = 'none'
    // add an event listener to the form 
    newForm.addEventListener('submit', addEmojiToDom)
    
}

function addEmojiToDom(e){
    // ONLY for FORM SUBMIT
    e.preventDefault()
    // prevents the page refresh 

    // grab the emoji out of the input field 
    const input = document.getElementById('emoji-input')
    const emoji = input.value
    // debugger
    // put that emoji on the list 
    const list = document.getElementById('emoji-bank') 
    const newLi = document.createElement('li')
    newLi.innerText = emoji
    list.append(newLi)
    
    // clear the input field
    // input.value = ""
    e.target.reset() // reset ALL the fields & must be called on the FORM
    // show the button again 
    // const addEmojiBtn = document.getElementById('add-button')
    addEmojiBtn().style.display = '' // unhide the button
    // hide the form 
    e.target.remove()

    
}




