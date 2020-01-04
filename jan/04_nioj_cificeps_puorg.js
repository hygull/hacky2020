function getRegex(keywords) {
    let regex = new RegExp(keywords.split(/\s+/g).map((item) => item.trim()).join('|'), 'gi')
    return regex
}

function joinGroup({
        keywords='', 
        join=true, 
        all=false
    } = {}) { // Space separated keywords

    let joinedGroups = []

    let cardGroups = $(".mn-cohorts-list").children
    joinCards  = $(".discover-entity-list", cardGroups[5]).children

    for(let joinCard of joinCards) {
        let groupName = $('.discover-group-card__name', joinCard).innerText

        if(join) {
            className = 'group_join'
        } else {
            className = 'group_unjoin'
        }

        let button = $(`button[data-control-name="${className}"]`, joinCard)
        if(!all) {
            let regex = getRegex(keywords)
            if(!groupName.match(regex)) {
                continue
            }
        }

        if(button) {
            button.click() // Join Group
            joinedGroups.push(groupName) // Record the name of joined group
        } else {
            console.log('Could fulfill request')
        }
    }   

    return joinedGroups
}

/*
    If you want to join groups which have word `algorithms` or `internet`
    Note: These words containing groups should appear in page
*/
joinGroup({keywords: "algorithms internet", join: true})     // Join:   ["Algorithms (O)", "Internet of Things"]
// joinGroup({keywords: "algorithms internet", join: false}) // Unjoin: ["Algorithms (O)", "Internet of Things"]
