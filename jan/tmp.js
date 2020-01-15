function getNotInterestedInOpportunityMessage(first_name) {
    let message = "Dear " + first_name + ',\n\n';
    message += "Thank you very much and I appreciate your work but I am sorry to say that currently I am not available for the job opportunity.\n\n"
    message += 'Best Regards,\nRishikesh Agrawani\nPython/Django Developer (Moneybloom)'

    return message
}

function fillMessage(message) {
    let first_name = $(".msg-entity-lockup__entity-title").textContent.trim().split(' ')[0];
    
    if(!message) {
        message = getNotInterestedInOpportunityMessage(first_name) 
    } 
    divContentEditable = $(".msg-form__contenteditable p").innerText = message 

    return {'success': true, "message": message}
}