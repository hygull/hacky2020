// Open in new tab (By default, GitHub doesn't open link new tab).
// Clicking on the contributors link.
let contributors = $('a[data-hovercard-type="contributors"]')

// Set attribute as target='blank'
contributors.setAttribute("target", "_blank")

// Click on the link
contributors.click()
