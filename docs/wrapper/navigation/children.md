# ElementWrapper.children()

## Definition
```ts
children(selector?: string): ElementWrapper
```


## Description

Returns a new ElementWrapper containing the direct children of the selected elements.

Optionally, pass a CSS selector to filter the results.

## Examples

### Getting all children

```html
<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ul class="list">
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

```ts
$('.list').children(); // Wraps the <li> elements
```

### Filtering children by selector

```html
<ul class="list">
  <li>Item 1</li>
  <li class="active">Item 2</li>
</ul>
<ul class="list">
  <li class="active">Item 3</li>
  <li>Item 4</li>
</ul>
```

```ts
$('.list').children('.active'); // Wraps the two .active <li> elements
```
