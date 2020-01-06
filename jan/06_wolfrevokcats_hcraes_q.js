function searchStackOverflow(searchString) {
    // Enter search string in input field
    $(".s-input__search").val(searchString)

    // Hit ENTER to submit form
    $("form#search").submit()
}

// Search Example, Search for questions related to `Django Rest Framework`
searchStackOverflow("Django Rest Framework")