function getGroupNames() {
    let groupNames = []

    let cardGroups = $(".mn-cohorts-list").children
    joinCards  = $(".discover-entity-list", cardGroups[5]).children

    for(let joinCard of joinCards) {
        let groupName = $('.discover-group-card__name', joinCard).innerText
        groupNames.push(groupName)
    } 

    return groupNames  
}

console.log(JSON.stringify(getGroupNames(), null, 4))
/*
[
    "Angular Developers - JavaScript Mastermind for Professional Development by AngularJobs.com",
    "HR Jobs and Ideas - Human Resources, talent management, hiring tech, networking group",
    "US IT Staffing Recruiters Group - Connecting Ideas !",
    "Algorithms (O)",
    "Internet of Things",
    "Python Data Science and Machine Learning",
    "MeExcel - MS Office Help Group",
    "Linked:HR (#1 Human Resources Group)"
]
*/