function closeMessageBoxes({all=false} = {}) {
    var messageBox = $("button[data-control-name='overlay.close_conversation_window']")
    if(all) 
        while(true) {
            if(messageBox) { // If opened (Only 1 message box is allowed to open)
                messageBox.click()
            } else {
                break
            }

            messageBox = $("button[data-control-name='overlay.close_conversation_window']")
        }
    else
        if(messageBox)
            messageBox.click()
}

closeMessageBoxes() // Only close the very first message box
// closeMessageBoxes({all: true}) // Close all opened message boxes
