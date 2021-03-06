<h1 id='hygull-root-hacky2020'>hacky2020</h1>

A repository containing full of code snippets to manipulate the DOM of popular websites (secret) and perform time taking actions quickly in seconds. 

## Currently targeted websites

1. [LinkedIn](https://www.linkedin.com/)
2. [GitHub](https://www.github.com/)
3. [StackOverflow](https://www.stackoverflow.com/)
4. [Quora](https://www.quora.com/)
5. [Google](https://google.com/)

## Why did I create this project?

+ I love JavaScript/jQuery.
+ I am very curious to know about internal working (API calls, DOM change on actions/events etc.) in websites of Amazon, Linkedin, Facebook, Google etc.
+ When I was sending requests to people in Linkedin, I found it as repeating & time consuming work.
+ Later, I thought to solve this using JavaScript/jQuery and I succeeded (long back) but I didn't save my code anywhere.
+ In this new year(2020), almost after 2-3 months since last attempt, again I inspected webpage and did R&D. It was again a rework of what I had already done before.
+ Finally, I decided to get rid of this problem and share my work with the world.

**Note:** I have created this project for my personal use and save my hacky, R&D related code snippets. So be careful and don't misuse it anywhere.

Let's have look at below examples. It will also help users/developers/newbies to learn JavaScript/jQuery. Examples are documented, easy and straightforward.

> **`$`** &raquo; **`ƒ $(selector, [startNode]) { [Command Line API] }`** &raquo; **`LinkedIn`**
>
> **`$`** &raquo; **`ƒ (a,b){return new n.fn.init(a,b)}`** &raquo; **`StackOverflow`**
>
> **`$`** &raquo; **`ƒ $(selector, [startNode]) { [Command Line API] }`** &raquo; **`GitHub`**
>
> **`$`** &raquo; **`ƒ $(selector, [startNode]) { [Command Line API] }`** &raquo; **`Quora`**

### Gettings started (Directly jump to)

1. [LinkedIn Hacky Works](#linkedin)
2. [GitHub Hacky Works](#github)
3. [StackOverflow Hacky Works](#stackoverflow)
4. [Quora Hacky Works](#quora)

<hr>

<h2 id='linkedin'> Linkedin </h2>

Have a look at the attached images related to this section at [Linkedin Hacky Images](./docs/2020/jan/nidknil.md).

### Single connection request
> Attempted on Wed, Jan 1, 2020

```javascript
// Get element
var elem = $("button[data-control-name='people_connect']")

// Click on element
elem.click()
````

### Multiple connection requests
> Attempted on Wed, Jan 1, 2020

```javascript
// Get all buttons
var buttons = document.getElementsByTagName("button")

// Iterate over buttons
for(let button of buttons) {
    attribName = button.getAttribute('data-control-name')
    
    if(attribName === 'people_connect') {
        // Click on button to send connection request
        button.click() 
    }
}
```


### Printing nav items text (innerText)

> Attempted on Thu, Jan 2, 2020

```javascript
/*
    Aim
    ===
    To print text of Linkedin's nav bar i.e. Home, My Network etc. 

    Coded on
    ========
    Thu, Jan 2, 2020
    
    By
    ==
    Rishikesh Agrawani

    Got idea from
    =============
    $ -> ƒ $(selector, [startNode]) { [Command Line API] }
*/

// Get all nav items by class name 
var elems = document.getElementsByClassName("nav-item")

// First way using `textContent`
for(let elem of elems) {
    let navItem = $(".nav-item__title", elem)
    if(navItem) //!null
    console.log(navItem.textContent)
}

// Second way using `innerText`
for(let elem of elems) {
    let navItem = $(".nav-item__title", elem)
    if(navItem) //!null
    console.log(navItem.innerText)
}

/*
    Home
    My Network
    Jobs
    Messaging
    Notifications
    Me
    Work
*/
``` 

![Hacky Image 10](./images/2020/jan/nidknil_10.png)

### Getting list of groups available in currently active `My Network` tab
> Attempted on Sat, Jan 4, 2020

```javascript
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
```
![Hacky Image 11](./images/2020/jan/nidknil_11.png)

### Joining/Unjoining groups (all OR based on keywords matched)  
> Attempted on Sat, Jan 4, 2020


```javascript
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
// joinGroup({all: true, join: true}) // Join all groups (8 max visible in page)
```
> **`Join Group - joinGroup({keywords: "algorithms internet", join: true})`**
![Hacky Image 11](./images/2020/jan/nidknil_12.png)

> **`Unjoin Group - joinGroup({keywords: "algorithms internet", join: false})`**
![Hacky Image 11](./images/2020/jan/nidknil_13.png)

> **`Join all groups (max 8 visible in page) - joinGroup({all: true, join: true})`**
![Hacky Image 11](./images/2020/jan/nidknil_14.png)


### Getting message button texts available in Notifications tab
> Attempted on Sun, 5 Jan, 2020
```javascript
function getNotificationsButtonsText() {
    let buttonTexts = new Array() // Output array
    ntCards = $(".nt-segment").children

    for(let ntCard of ntCards) {
        button = $("button.message-anywhere-button", ntCard)
        span = $("span", ntCard)

        if(button && span)
            buttonTexts.push($("span", button).innerText)
    }

    return buttonTexts
}


var buttonTexts = getNotificationsButtonsText()
console.log(buttonTexts) // ["Say congrats", "Say congrats", ...]

```
> **`Getting message button texts available in Notifications tab`**
![Hacky Image 11](./images/2020/jan/nidknil_16.png)

### Closing message box(es) opened (clicked on Notifications tab)
>Attempted on Sun, 5 Jan, 2020

```javascript
function closeMessageBoxes({all=false} = {}) {
    var messageBox = $("button[data-control-name='overlay.close_conversation_window']")
    if(all) 
        while(true) {
            if(messageBox) { // If opened 
                messageBox.click()
            } else {
                break
            }

            messageBox = $("button[data-control-name='overlay.close_conversation_window']")
        }
    else
        if(messageBox) // If opened 
            messageBox.click()
}

closeMessageBoxes() // Only close the very first message box
// closeMessageBoxes({all: true}) // Close all opened message boxes
```

<hr>

<h2 id="github">GitHub</h2>

### Open the contributors link in new tab
> Attempted on Wed, Jan 1, 2020

```javascript
// Open in new tab (By default, GitHub doesn't open link new tab).
// Clicking on the contributors link.
var contributors = $('a[data-hovercard-type="contributors"]')

// Set attribute as target='blank'
contributors.setAttribute("target", "_blank")

// Click on the link
contributors.click()
```

### Raising/Creating pull request - open in new tab
> Attempted on Wed, Jan 1, 2020

```javascript
// Get anchor link element
var newPullReqBtn = document.getElementsByClassName('new-pull-request-btn')[0]

// First check if target is set or not (which is actually `null`)
newPullReqBtn.getAttribute("target")

// Set attribute to open in new tab
newPullReqBtn.setAttribute("target", "_blank")

// Click on link
newPullReqBtn.click()
```

### Printing added topics to the repository
> Attempted on Wed, Jan 1, 2020

```javascript
// Get list of elements by class name
let elems = document.getElementsByClassName("topic-tag-link")

// Printing the text (topic)
for(let elem of elems) {
    console.log(elem.innerText)
}
```

### Printing all commits
> Attempted on Wed, Jan 1, 2020

```javascript
// Get all elements (links `a` with class `message`) 
var commitsElems = document.getElementsByClassName("message")
/*
    HTMLCollection(8) [a.message.js-navigation-open, a.message.js-navigation-open, a.message.js-navigation-open, a.message.js-navigation-open, a.message.js-navigation-open, a.message.js-navigation-open, a.message.js-navigation-open, a.message.js-navigation-open]
*/


// Printing innerText of all commits
for(let commitElem of commitsElems) {
    console.log(commitElem.innerText)
}
/*
    added script to print topics added to repo
    updated script to create pull request in next tab
    added images related to Linkedin Hacky Images
    updated README.md with update on details
    added script to click on GitHub's contributors to open in new tab
    added js scripts for single & multple connection requests sending hac…
    Set theme jekyll-theme-cayman
    Initial commit
*/
```

### Getting list of nav items links
> Attempted on Fri, Jan 3, 2020

```javascript
function getNavItemsLinks() {
    let navLinks = new Array()

    for(let li of $("nav ul").children) {
        let a = $('a', li)

        if(a)
            navLinks.push(a.href)       
    }

    return navLinks
}

console.log(getNavItemsLinks())
/*
    [
        "https://www.linkedin.com/feed/", 
        "https://www.linkedin.com/mynetwork/", 
        "https://www.linkedin.com/jobs/", 
        "https://www.linkedin.com/messaging/", 
        "https://www.linkedin.com/notifications/", 
        "https://www.linkedin.com/premium/products/?destRed…%3Dtrue&upsellOrderOrigin=premium_nav_upsell_text"
    ]
*/
``` 

### Putting message in box with dynamically picked recipient name and activating click event
> Attempted on Wed, Jan 15, 2020
>
> **Note:** Just add a space at end of the message and click on **SEND** (Later, I need to check and fix this). 

```javascript
function getHTMLmessage(message) {
    let out = ''

    for(let line of message.split(/\n/gi)){
        if(line) {
            out += '<p>' + line + '</p>'
        } else {
            out += '<p><br></p>'
        }
    }

    out += '<br>'
    return out
}
```

```javascript
function getNotInterestedInOpportunityMessage(first_name, full_name, occupation) {
    let message = "Dear " + first_name + ',\n\n';
    message += "Thank you very much and I appreciate your work but I am sorry to say that currently I am not available for the job opportunity.\n\n"
    message += `Best Regards,\n${full_name}` 

    if(occupation) {
        message += `\n${occupation}`
    }

    message = getHTMLmessage(message)
    return message
}
```

```javascript
function putMessage({
        message, 
        full_name='Rishikesh Agrawani', 
        occupation='Python/Django Developer (Moneybloom)'
    } = {}) {

    let first_name = $(".msg-entity-lockup__entity-title").textContent.trim().split(' ')[0];
    
    if(!message) {
        message = getNotInterestedInOpportunityMessage(first_name, full_name, occupation) 
    } 
    divContentEditable = $(".msg-form__contenteditable p").innerHTML = message 

    $(".msg-form__contenteditable p").innerHTML = message

    classesArr = $(".msg-form__placeholder").getAttribute("class").split(' ')
    // "msg-form__placeholder", "t-14", "t-black--light", "t-normal", "visible"]

    /* Remove class named `visible` */
    classesArr.splice(classesArr.indexOf("visible"), 1)
    // ["visible"], classesArr -> ["msg-form__placeholder", "t-14", "t-black--light", "t-normal"]

    /* Add new class `hidden` */
    classesArr.push("hidden")
    // ["msg-form__placeholder", "t-14", "t-black--light", "t-normal", "hidden"]

    return true // Success
}
```

```javascript
function removePlaceholder() {
    /* Make the message properly visible (remove placeholder) and update the classes */
    newClasses = classesArr.join(' ');
    $(".msg-form__placeholder").setAttribute("class", newClasses);

    return true // Success
}
```

```javascript
function activateButton() {
    // Activate button
    $("[value=send]").click(); // $("[value=enterSend]").click()
    $(".msg-form__send-button").removeAttribute("disabled");

    return true // Success
}
```

```javascript
function sendMessageOnClick() {
    // Need to check as it is not working right now, it works when you add any space
    // at the end of currenlty filled message and then manually trigger this using
    // `sendMessageOnClick()` statement
    $(".msg-form__send-button").click();
}
```

```javascript
function sendMessageUsingMessageBox(message) {
    putMessage(message) 
    // putMessage({full_name: "Rishikesh Agrawani", "occupation": "Python Developer"})
    // putMessage({message: "Hello", full_name: "Rishikesh Dev", "occupation": "PyDev"})
    
    activateButton()
    removePlaceholder()
    sendMessageOnClick()
}
```

> **`Putting message in box with dynamically picked recipient name (not available for opportunity)`**
![Hacky Image 12](./images/2020/jan/nidknil_17.png)

<hr>
<h2 id="stackoverflow">StackOverflow</h2>

### Getting question texts from home's questions list page
> Attempted on Fri, Jan 3, 2020
```javascript
// - Get question text label on stackoverflow's home page 
// - An example using pure jQuery
function getQuestionTexts() {
    let questionTexts = [] // new Array()

    $(".question-hyperlink").each(function(index, questionHyperlink){
        if(!$(questionHyperlink).hasClass("mb0"))
            questionTexts.push($(questionHyperlink).text())
    })

    return questionTexts
}

console.log(JSON.stringify(getQuestionTexts(), null, 4)) // Pretty print
// console.log(getQuestionTexts())
```
![Hacky Image Sof 01](./images/2020/jan/fos_01.png)

### Hot network questions - getting question texts (Available on right, web version)
> Attempted on Fri, Jan 3, 2020
```javascript
function getHotNextworkQuestionTexts() {
    let hotNextworkQuestionTexts = [] // new Array()

    $(".question-hyperlink").each(function(index, questionHyperlink){
        if($(questionHyperlink).hasClass("mb0"))
            hotNextworkQuestionTexts.push($(questionHyperlink).text())
    })

    // Removal of \n & spaces around
    //
    // [
    // "\n                    Significant pay cut in new job not justified in retrospect - next steps?\n                ",
    // ...
    // ...
    // ]
    return hotNextworkQuestionTexts.map((questionText) => questionText.trim())
}

console.log(JSON.stringify(getHotNextworkQuestionTexts(), null, 4))
```
![Hacky Image Sof 02](./images/2020/jan/fos_02.png)

### Search for questions on StackOverflow
> Attempted on Mon, Jan 6, 2020

```javascript
function searchStackOverflow(searchString) {
    // Enter search string in input field
    $(".s-input__search").val(searchString)

    // Hit ENTER to submit form
    $("form#search").submit()
}

// Search Example, Search for questions related to `Django Rest Framework`
searchStackOverflow("Django Rest Framework")
```

### Getting list of tags in tags page `/tags/, /tags?page=1&tab=popular etc.`
> Attempted on Mon, Jan 6, 2020

```javascript
function getAllTagsInCurrenltyActivePage() {
    // Function which returns a list/array of all available tags in currently active page
    // i.e. /tags/, /tags?page=1&tab=popular, /tags?page=5&tab=popular etc.

    let tags = []
    $('#tags-browser a.post-tag').each((i, e) => {
        tags[i] = $(e).text()
    })

    return tags
}

var tags = getAllTagsInCurrenltyActivePage()
console.log(JSON.stringify(tags, undefined, 4)) // Pretty printing array
```
![Hacky Image Sof 03](./images/2020/jan/fos_03.png)


### Activating nav items (programatically click)

> Attempted on Tue, Jan 7, 2020

```javascript
function activateNavItem(name) {
    let navItems = {
        'achievements': '.achievements-button-item a',
        'inbox': ".inbox-button-item a" ,
        'review': '.review-button-item a',
        'help': '.help-button-item a',
        'site_switch': '.site-switcher-item a'
        'profile': '.-item a img' 
    }

    if(navItems[name]) {
        $(navItems[name]).click()
    }
}

// Activate `Profile View` nav item
activateNavItem('profile')

// Activate `Inbox` nav item
activateNavItem('inbox')

// Activate `Achievements` nav item
activateNavItem('achievements')

// Activate `Review` nav item
activateNavItem('review')

// Activate `Help` nav item
activateNavItem('help')

// Activate `Site swicther` nav item
activateNavItem('site_switch')
```

![Hacky Image Sof 03](./images/2020/jan/fos_04.png)


<hr>
<h2 id="quora">Quora</h2>

### Getting labels of menu items on left

> Attempted on Thu, Jan 9, 2020

```javascript
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
```
![Hacky Image Quora 01](./images/2020/jan/arouq_01.png)

### Getting texts of nav items 

> Attempted on Sat, Jan 11, 2020

```javascript
function getNavItemsTexts() {
    var navItemTexts = new Array()
    var spans = $(".header_nav").children

    for(var span of spans) {
        var elem = $(".expanded", span) // May be `null` if span exists but not 
                                        // the `expanded` class in any of its descendants
        if(elem) {
            navItemText = elem.innerText
            navItemTexts.push(navItemText)
        }
    }

    return navItemTexts
}

console.log(getNavItemsTexts()) 
// ["Home", "Answer", "Spaces", "Notifications"]
```
![Hacky Image Quora 02](./images/2020/jan/arouq_02.png)

<hr>
<h2 id="google">Google</h2>

#### Search on Google

> Attempted on Wed, Apr 08, 2020

```javascript
function googleSearch(text) {
    $('input[type="text"]').value = text;
    $('button[type="submit"]').click()
}

googleSearch('Top programming languages')
```


