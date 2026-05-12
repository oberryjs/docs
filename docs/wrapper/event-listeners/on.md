# ElementWrapper.on()

## Definition

```ts
on<K extends keyof HTMLElementEventMap>(
  event: K,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void
): this
```

## Description

Adds an event listener to all selected elements.

The event name must be a valid DOM event (e.g. `'click'`, `'input'`, `'keydown'`). The callback receives the native event object.

To remove a listener added with `.on()`, use [`.off()`](./off).

## Example

```html
<button class="btn">Click me</button>
```

```ts
$('.btn').on('click', () => {
  console.log('Clicked!');
});
```

### Accessing the event object

```ts
$('input').on('keydown', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter pressed');
  }
});
```
