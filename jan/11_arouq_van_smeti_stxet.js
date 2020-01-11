function getNavItemsTexts() {
    var navItemTexts = new Array()
    var spans = $(".header_nav").children

    for(var span of spans) {
        var elem = $(".expanded", span) // May be `null` if span exists but not 
                                        // the class in any of descendants
        if(elem) {
            navItemText = elem.innerText
            navItemTexts.push(navItemText)
        }
    }

    return navItemTexts
}

console.log(getNavItemsTexts()) 
// ["Home", "Answer", "Spaces", "Notifications"]