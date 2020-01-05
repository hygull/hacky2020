function closeMessageBoxes({all=false} = {}) {
    var messageBox = $("button[data-control-name='overlay.close_conversation_window']")
    if(all) 
        while(true) {
            if(messageBox) { // If opened 
                messageBox.click()
            } else {
                break
            }

            messageBox = $("button[data-control-name='overlay.close_conversation_window']")
        }
    else
        if(messageBox) // If opened 
            messageBox.click()
}

closeMessageBoxes() // Only close the very first message box
// closeMessageBoxes({all: true}) // Close all opened message boxes
