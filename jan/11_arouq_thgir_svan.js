function getNavItemsText() {
    var navItemTexts = new Array()
    var spans = $(".header_nav").children

    for(var span of spans) {
        navItemText = span.innerText
        navItemTexts.push(navItemText)
    }

    return navItemTexts
}

