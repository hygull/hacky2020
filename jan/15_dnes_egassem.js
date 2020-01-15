/*
    15 Jan 2020, Wed

    Activate `click` to send (not ENTER)

    Filling message box 
*/
function getHTMLmessage(message) {
    let out = ''

    for(let line of message.split(/\n/gi)){
        if(line) {
            out += '<p>' + line + '</p>'
        } else {
            out += '<p><br></p>'
        }
    }

    out += '<br>'
    return out
}

function getNotInterestedInOpportunityMessage(first_name, full_name, occupation) {
    let message = "Dear " + first_name + ',\n\n';
    message += "Thank you very much and I appreciate your work but I am sorry to say that currently I am not available for the job opportunity.\n\n"
    message += `Best Regards,\n${full_name}` 

    if(occupation) {
        message += `\n${occupation}`
    }

    message = getHTMLmessage(message)
    return message
}

function putMessage({
        message, 
        full_name='Rishikesh Agrawani', 
        occupation='Python/Django Developer (Moneybloom)'
    } = {}) {

    let first_name = $(".msg-entity-lockup__entity-title").textContent.trim().split(' ')[0];
    
    if(!message) {
        message = getNotInterestedInOpportunityMessage(first_name, full_name, occupation) 
    } 
    divContentEditable = $(".msg-form__contenteditable p").innerHTML = message 

    $(".msg-form__contenteditable p").innerHTML = message

    classesArr = $(".msg-form__placeholder").getAttribute("class").split(' ')
    // "msg-form__placeholder", "t-14", "t-black--light", "t-normal", "visible"]

    /* Remove class named `visible` */
    classesArr.splice(classesArr.indexOf("visible"), 1)
    // ["visible"], classesArr -> ["msg-form__placeholder", "t-14", "t-black--light", "t-normal"]

    /* Add new class `hidden` */
    classesArr.push("hidden")
    // ["msg-form__placeholder", "t-14", "t-black--light", "t-normal", "hidden"]

    return true // Success
}

function removePlaceholder() {
    /* Make the message properly visible (remove placeholder) and update the classes */
    newClasses = classesArr.join(' ')
    $(".msg-form__placeholder").setAttribute("class", newClasses)

    return true // Success
}

function activateButton() {
    // Activate button
    $("[value=send]").click() // $("[value=enterSend]").click()
    $(".msg-form__send-button").removeAttribute("disabled")

    return true // Success
}

function sendMessageOnClick() {
    $(".msg-form__send-button").click()
}

function sendMessageUsingMessageBox(message) {
    putMessage(message) 
    // putMessage({full_name: "Rishikesh Agrawani", "occupation": "Python Developer"})
    // putMessage({message: "Hello", full_name: "Rishikesh Agrawani", "occupation": "Python Developer"})
    
    activateButton()
    removePlaceholder()
    sendMessageOnClick()
}