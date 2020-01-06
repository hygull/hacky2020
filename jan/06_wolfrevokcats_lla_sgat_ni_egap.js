function getAllTagsInCurrenltyActivePage() {
    // Function which returns a list/array of all available tags in currently
    // active page
    let tags = []
    $('#tags-browser a.post-tag').each((i, e) => {
        tags[i] = $(e).text()
    })

    return tags
}

var tags = getAllTagsInCurrenltyActivePage()
console.log(JSON.stringify(tags, undefined, 4)) // Pretty printing array

/*
[
    "assembly",
    "asp.net-web-api",
    "logging",
    "intellij-idea",
    "flask",
    "matrix",
    "search",
    "amazon-s3",
    "javafx",
    "stored-procedures",
    "servlets",
    "flutter",
    "ggplot2",
    "networking",
    "xpath",
    "canvas",
    "mod-rewrite",
    "cakephp",
    "audio",
    "encryption",
    "optimization",
    "memory",
    "npm",
    "video",
    "model-view-controller",
    "java-ee",
    "razor",
    "webpack",
    "firebase-realtime-database",
    "cookies",
    "grails",
    "arraylist",
    "android-intent",
    "google-apps-script",
    "jdbc",
    "mongoose"
]
*/
