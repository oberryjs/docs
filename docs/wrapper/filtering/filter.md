
# ElementWrapper.filter()
 
## Definition
 
```ts
filter(selector: string): ElementWrapper;
filter(predicate: (element: HTMLElement, index: number) => boolean): ElementWrapper;
```
 
## Description
 
Reduces the set of selected elements to those that match the given condition, returning a new `ElementWrapper` with the results.
 
You can filter by a CSS selector string or a predicate function. Elements that do not match are excluded.
 
## Examples
 
### Filtering by CSS selector
 
```html
<li class="item">One</li>
<li class="item active">Two</li>
<li class="item">Three</li>
<li class="item active">Four</li>
```
 
```ts
$('.item').filter('.active'); // Wraps "Two" and "Four"
```
 
### Filtering by predicate function
 
```html
<li class="item">One</li>
<li class="item">Two</li>
<li class="item">Three</li>
```
 
```ts
$('.item').filter((el, index) => index % 2 === 0);
// Wraps "One" (index 0) and "Three" (index 2)
```
