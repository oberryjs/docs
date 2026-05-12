# ElementWrapper.show()

## Definition

```ts
show(): this
```

## Description

Shows all selected elements by restoring the `display` value that was saved when [`.hide()`](./hide) was called.

If no original value was stored, the element's display falls back to `block`.

## Example

```html
<div class="alert" style="display: none;">Something went wrong.</div>
```

```ts
$('.alert').show(); // Restores display to its previous value
```
