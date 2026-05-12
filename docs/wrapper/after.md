# ElementWrapper.after()

## Definition

```ts
after(content: string): this;
after(content: HTMLElement): this;
after(content: ElementWrapper): this;
```

## Description

Used for inserting HTML content immediately after each selected element (as a sibling).

## Examples

### After a string

```html
<div class="box"></div>
```

```ts
$('.box').after('<p>Hello</p>');
```

The HTML will be updated to:

```html
<div class="box"></div>
<p>Hello</p>
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
<div class="box"></div>
<span>Hi</span>
```

### After elements from another ElementWrapper

```html
<div class="source">Item</div>
<div class="target">Target</div>
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
