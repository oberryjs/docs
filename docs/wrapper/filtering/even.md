# ElementWrapper.even()
 
## Definition
 
```ts
even(): ElementWrapper
```
 
## Description
 
Returns a new `ElementWrapper` containing the elements at even positions using **1-based indexing** — that is, the 2nd, 4th, 6th elements, and so on.
 
## Example
 
```html
<li class="item">First</li>
<li class="item">Second</li>
<li class="item">Third</li>
<li class="item">Fourth</li>
```
 
```ts
$('.item').even(); // Wraps "Second" and "Fourth"
```
