# ElementWrapper.append()

## Definition

```ts
append(content: string): this;
append(content: HTMLElement): this;
append(content: ElementWrapper): this;
```

## Description

Used for appending HTML content to the selected elements.

## Examples

### Appending a string

```html
<div class="box"></div>
```

```ts
$('.box').append('<p>Hello</p>');
```

The HTML will be updated to:

```html
<div class="box">
  <p>Hello</p>
</div>
```

### Appending an HTML element

```html
<div class="box"></div>
```

```ts
const el = document.createElement('span');
el.textContent = 'Hi';

$('.box').append(el);
```

The HTML will be updated to:

```html
<div class="box">
  <span>Hi</span>
</div>
```

### Appending elements from another ElementWrapper

```html
<div class="target"></div>
<div class="source">Item</div>
```

```ts
const source = $('.source');

$('.target').append(source);
```

The HTML will be updated to:

```html
<div class="target">
  <div class="source">Item</div>
</div>
<div class="source">Item</div>
```
