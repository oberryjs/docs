# ElementWrapper.reduce()
 
## Definition
 
```ts
reduce<R>(callback: (accumulator: R, element: ElementWrapper, index: number) => R, initial: R): R
```
 
## Description
 
Accumulates a single value by calling the provided callback for each element in the selection.
 
Each element is passed as a new `ElementWrapper` containing only that element, along with its zero-based index and the current accumulated value. The `initial` argument is used as the starting value of the accumulator.
 
## Examples
 
### Concatenating text
 
```html
<li class="item">One</li>
<li class="item">Two</li>
<li class="item">Three</li>
```
 
```ts
const combined = $('.item').reduce((acc, el) => acc + el.text() + ' ', '');
// 'One Two Three '
```
 
### Summing numeric values
 
```html
<span class="price">10</span>
<span class="price">25</span>
<span class="price">5</span>
```
 
```ts
const total = $('.price').reduce((sum, el) => sum + Number(el.text()), 0);
// 40
```
