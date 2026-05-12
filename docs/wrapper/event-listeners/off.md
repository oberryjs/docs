# ElementWrapper.off()
 
## Definition
 
```ts
off<K extends keyof HTMLElementEventMap>(event: K, callback: EventListener): this
```
 
## Description
 
Removes a previously added event listener from all selected elements.
 
The `callback` reference must match the one originally passed to [`.on()`](./on) — anonymous functions cannot be removed this way.
 
## Example
 
```ts
function handleClick() {
  console.log('Clicked!');
}
 
$('.btn').on('click', handleClick);
 
// Later, remove the listener
$('.btn').off('click', handleClick);
```
