
# ElementWrapper.getArray()
 
## Definition
 
```ts
getArray(): HTMLElement[]
```
 
## Description
 
Returns a plain array of the raw `HTMLElement` nodes in the wrapper.
 
Useful when you need to work with native DOM APIs directly, or pass elements to a third-party library.
 
## Example
 
```html
<li class="item">One</li>
<li class="item">Two</li>
<li class="item">Three</li>
```
 
```ts
const elements = $('.item').getArray();
// [<li>, <li>, <li>]
 
elements.forEach(el => {
  console.log(el.textContent);
});
// "One"
// "Two"
// "Three"
```
