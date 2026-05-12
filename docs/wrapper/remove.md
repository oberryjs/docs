# ElementWrapper.remove()

## Definition

```ts
remove(): this
```

## Description

Used to remove all the selected elements from the DOM.

## Example

```html
<div class="element"><div>
<p>This will stay!<p>
<p class="element"><p>
```


```ts
$('.element').remove();
```

The HTML will be updated to:

```html
<p>This will stay!<p>
```
