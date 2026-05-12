# ElementWrapper.isEmpty()
 
## Definition
 
```ts
isEmpty(): boolean
```
 
## Description
 
Returns `true` if the selection contains no elements, `false` otherwise.
 
Useful for guarding against operations on empty selections before proceeding.
 
## Example
 
```html
<li class="item">One</li>
```
 
```ts
$('.item').isEmpty();        // false
$('.nonexistent').isEmpty(); // true
```
