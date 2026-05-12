
# ElementWrapper.map()
 
## Definition
 
```ts
map<R>(callback: (element: ElementWrapper, index: number) => R): R[]
```
 
## Description
 
Transforms each element in the selection by calling the provided callback, and returns a plain array of the results.
 
Each element is passed to the callback as a new `ElementWrapper` containing only that element, along with its zero-based index.
 
## Example
 
```html
<li class="item">One</li>
<li class="item">Two</li>
<li class="item">Three</li>
```
 
```ts
const texts = $('.item').map(el => el.text());
// ['One', 'Two', 'Three']
```
