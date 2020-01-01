# hacky2020

A repository containing full of code snippets to manipulate the DOM of popular websites (secret) and perform time taking actions quickly in seconds. Basically I have written it for my personal usage.

### Linkedin - Attempted on 01/01/2020

> **Single**

```javascript
elem = $("button[data-control-name='people_connect']").click()
elem.click()
````

> **Many**

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


