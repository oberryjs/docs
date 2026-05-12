First · MD
# ElementWrapper.first()
 
## Definition
 
```ts
first(): ElementWrapper
```
 
## Description
 
Returns a new `ElementWrapper` containing only the first element in the selection.
 
Equivalent to [`.eq(0)`](./eq).
 
## Example
 
```html
<li class="item">First</li>
<li class="item">Second</li>
<li class="item">Third</li>
```
 
```ts
$('.item').first(); // Wraps "First"
```
