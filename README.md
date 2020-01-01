# hacky2020

A repository containing full of code snippets to manipulate the DOM of popular websites (secret) and perform time taking actions quickly in seconds. 

## Why did I create this project?

+ I love JavaScript/jQuery.
+ I am very curious to know about internal working (API calls, DOM change on actions/events etc.) in websites of Amazon, Linkedin, Facebook, Google etc.
+ When I was sending requests to people in Linkedin, I found it as repeating & time consuming work.
+ Later, I thought to solve this using JavaScript/jQuery and I succeeded long back but I didn't save my code anywhere.
+ In new year, almost after 2-3 months, again I inspected webpages, and did R&D again. This was again a rework of what I had already done before.
+ Finally, I decided to get rid of this problem and share my work with the world.

**Note:** I have created this project for my personal use and save my hacky & R&D related code snippets. So be careful and don't misuse it anywhere.


## Linkedin

Have a look at the pictures attaached related to this section at [Linkedin Hacky Images](./docs/2020/jan/nidknil.md).

> **Single connection request**
> Attempted on 1 Jan 2020, Wed

```javascript
var elem = $("button[data-control-name='people_connect']").click()
elem.click()
````

> **Multiple connection requests**
> Attempted on 1 Jan 2020, Wed

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


## GitHub

> **Opening the contributors link in new tab**
> Attempted on 1 Jan 2020, Wed

```javascript
// Open in new tab (By default, GitHub doesn't open link new tab).
// Clicking on the contributors link.
var contributors = $('a[data-hovercard-type="contributors"]')

// Set attribute as target='blank'
contributors.setAttribute("target", "_blank")

// Click on the link
contributors.click()
```

