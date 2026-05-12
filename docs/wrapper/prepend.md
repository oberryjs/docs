# ElementWrapper.prepend()

## Definition

```ts
prepend(content: string): this;
prepend(content: HTMLElement): this;
prepend(content: ElementWrapper): this;
```

## Description

Used for inserting HTML content at the beginning of each selected element.

## Examples

### Prepending a string

```html
<div class="box"></div>
```

```ts
$('.box').prepend('<p>Hello</p>');
```

The HTML will be updated to:

```html
<div class="box">
  <p>Hello</p>
</div>
```

### Prepending an HTML element

```html
<div class="box"></div>
```

```ts
const el = document.createElement('span');
el.textContent = 'Hi';

$('.box').prepend(el);
```

The HTML will be updated to:

```html
<div class="box">
  <span>Hi</span>
</div>
```

### Prepending elements from another ElementWrapper

```html
<div class="target"></div>
<div class="source">Item</div>
```

```ts
const source = $('.source');

$('.target').prepend(source);
```

The HTML will be updated to:

```html
<div class="target">
  <div class="source">Item</div>
</div>
<div class="source">Item</div>
```
