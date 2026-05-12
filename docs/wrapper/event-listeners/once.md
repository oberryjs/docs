# ElementWrapper.once()
 
## Definition
 
```ts
once<K extends keyof HTMLElementEventMap>(
  event: K,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void
): this
```
 
## Description
 
Adds an event listener to all selected elements that fires **once**, then automatically removes itself.
 
Useful for one-time interactions such as initialization on first click, or confirming a destructive action.
 
## Example
 
```html
<button class="start-btn">Start</button>
```
 
```ts
$('.start-btn').once('click', () => {
  console.log('Started! This will not fire again.');
});
```
