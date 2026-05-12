# ElementWrapper.clone()

## Definition

```ts
clone(deep?: boolean): ElementWrapper
```

## Description

Creates a copy of all selected elements and returns them in a new `ElementWrapper`.

By default, a deep clone is performed — meaning all descendant nodes are also copied. Pass `false` to perform a shallow clone that copies only the element itself, without its children.

The cloned elements are not attached to the DOM. Use methods like [`.append()`](./append), [`.prepend()`](./prepend), [`.after()`](./after), or [`.before()`](./before) to insert them.

## Examples

### Deep clone (default)

```html
<div class="card">
  <p>Content</p>
</div>
```

```ts
const copy = $('.card').clone();

$('body').append(copy);
```

The HTML will be updated to:

```html
<div class="card">
  <p>Content</p>
</div>
<div class="card">
  <p>Content</p>
</div>
```

### Shallow clone

```html
<div class="card">
  <p>Content</p>
</div>
```

```ts
const shallowCopy = $('.card').clone(false);

$('body').append(shallowCopy);
```

The HTML will be updated to:

```html
<div class="card">
  <p>Content</p>
</div>
<div class="card"></div>
```
