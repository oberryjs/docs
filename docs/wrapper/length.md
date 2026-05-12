# ElementWrapper.length()
 
## Definition
 
```ts
length(): number
```
 
## Description
 
Returns the number of elements in the selection.
 
## Example
 
```html
<li class="item">One</li>
<li class="item">Two</li>
<li class="item">Three</li>
```
 
```ts
$('.item').length(); // 3
$('.nonexistent').length(); // 0
```
