
# ElementWrapper.not()
 
## Definition
 
```ts
not(selector: string): ElementWrapper
```
 
## Description
 
Returns a new `ElementWrapper` containing only the elements that **do not** match the given CSS selector.
 
This is the inverse of [`.filter()`](./filter).
 
## Example
 
```html
<li class="item">One</li>
<li class="item disabled">Two</li>
<li class="item">Three</li>
<li class="item disabled">Four</li>
```
 
```ts
$('.item').not('.disabled'); // Wraps "One" and "Three"
```
