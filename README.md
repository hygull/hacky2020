# hacky2020

A repository containing full of code snippets to manipulate the DOM of popular websites (secret) and perform time taking actions quickly in seconds. Basically I have written it for my personal usage.

## Linkedin


> **Single connection request**
>
> Attempted on 1 Jan 2020, Wed

```javascript
elem = $("button[data-control-name='people_connect']").click()
elem.click()
````

> **Multiple connection requests**

```javascript
// Get all buttons
buttons = document.getElementsByTagName("button")

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
>
> Attempted on 1 Jan 2020, Wed

```javascript
// Open in new tab (By default, GitHub doesn't open link new tab).
// Clicking on the contributors link.
let contributors = $('a[data-hovercard-type="contributors"]')

// Set attribute as target='blank'
contributors.setAttribute("target", "_blank")

// Click on the link
contributors.click()
```

