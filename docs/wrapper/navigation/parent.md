# ElementWrapper.parent()
 
## Definition
 
```ts
parent(): ElementWrapper
```
 
## Description
 
Returns a new `ElementWrapper` containing the parent element of the first selected element.
 
If the element has no parent, an empty wrapper is returned.
 
## Example
 
```html
<div class="container">
  <span class="child">Hello</span>
</div>
```
 
```ts
$('.child').parent(); // Wraps the .container div
```
