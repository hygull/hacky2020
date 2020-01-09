function getLeftMenuItemsLabels() {
    // Getting all <li> elements
    var itemSwitchers = $(".switcher").children
    var menuItemsLabels = []

    // Finding the related element and extrating label text
    for(var itemSwitcher of itemSwitchers) {
        var label = $("div[class='label']", itemSwitcher).innerText

        // menuItemsLabels.push(label); /* OR */
        menuItemsLabels.splice(menuItemsLabels.length, 0, label) // []
    }

    return menuItemsLabels
}

// Call (test)
console.log(JSON.stringify(getLeftMenuItemsLabels(), undefined, 4))

/*
[
    "Feed",
    "Success and Happiness",
    "A Poem A Day",
    "Anything!",
    "Programmer's World",
    "Unemployed's Diary",
    "SciPhy",
    "Future Machines",
    "Smartass Club",
    "Daily Dose Of Vocabulary",
    "How To Use The Brain",
    "Hear Him!",
    "The Voice of Indian Youth",
    "Life and Understanding"
]
*/
