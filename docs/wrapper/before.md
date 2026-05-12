
# ElementWrapper.before()

## Definition

```ts
before(content: string): this;
before(content: HTMLElement): this;
before(content: ElementWrapper): this;
```

## Description

Used for inserting HTML content immediately before each selected element (as a sibling).

## Examples

### After a string

```html
<div class="box"></div>
```

```ts
$('.box').before('<p>Hello</p>');
```

The HTML will be updated to:

```html
<p>Hello</p>
<div class="box"></div>
```

### After an HTML element

```html
<div class="box"></div>
```

```ts
const el = document.createElement('span');
el.textContent = 'Hi';

$('.box').after(el);
```

The HTML will be updated to:

```html
<span>Hi</span>
<div class="box"></div>
```

### After elements from another ElementWrapper

```html
<div class="target">Target</div>
<div class="source">Item</div>
```

```ts
const source = $('.source');
$('.target').after(source);
```

The HTML will be updated to:

```html
<div class="source">Item</div>
<div class="target">Target</div>
<div class="source">Item</div>
```
