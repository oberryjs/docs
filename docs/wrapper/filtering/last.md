# ElementWrapper.last()
 
## Definition
 
```ts
last(): ElementWrapper
```
 
## Description
 
Returns a new `ElementWrapper` containing only the last element in the selection.
 
## Example
 
```html
<li class="item">First</li>
<li class="item">Second</li>
<li class="item">Third</li>
```
 
```ts
$('.item').last(); // Wraps "Third"
```
