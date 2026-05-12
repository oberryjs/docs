# ElementWrapper.eq()
 
## Definition
 
```ts
eq(index: number): ElementWrapper
```
 
## Description
 
Returns a new `ElementWrapper` containing only the element at the given zero-based index.
 
If the index is out of range, an empty wrapper is returned.
 
## Example
 
```html
<li class="item">First</li>
<li class="item">Second</li>
<li class="item">Third</li>
```
 
```ts
$('.item').eq(0); // Wraps "First"
$('.item').eq(1); // Wraps "Second"
$('.item').eq(2); // Wraps "Third"
```
