// Get anchor link element
var newPullReqBtn = document.getElementsByClassName('new-pull-request-btn')[0]

// First check if target is set or not (which is not actually set so `null`)
newPullReqBtn.getAttribute("target")

// Set attribute to open in new tab
newPullReqBtn.setAttribute("target", "_blank")

// Click on link
newPullReqBtn.click()