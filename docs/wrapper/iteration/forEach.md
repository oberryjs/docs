# ElementWrapper.forEach()
 
## Definition
 
```ts
forEach(callback: (element: ElementWrapper, index: number) => void): void
```
 
## Description
 
Iterates over each element in the selection, calling the provided callback once per element.
 
Each element is passed to the callback as a new `ElementWrapper` containing only that element, along with its zero-based index.
 
## Example
 
```html
<li class="item">One</li>
<li class="item">Two</li>
<li class="item">Three</li>
```
 
```ts
$('.item').forEach((el, index) => {
  el.class.add(`item-${index}`);
});
```
 
The HTML will be updated to:
 
```html
<li class="item item-0">One</li>
<li class="item item-1">Two</li>
<li class="item item-2">Three</li>
```
