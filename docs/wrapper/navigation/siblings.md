# ElementWrapper.siblings()

## Definition

```ts
siblings(selector?: string): ElementWrapper
```

## Description

Returns a new ElementWrapper containing all siblings of all selected elements.
Optionally, pass a CSS selector to filter the results.

## Examples

### Getting all siblings

```html
<ul>
  <li class="current">Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ul>
  <li class="current">Item A</li>
  <li>Item B</li>
</ul>
```

```ts
$('.current').siblings(); // Wraps "Item 2", "Item 3", and "Item B"
```

### Filtering siblings by selector

```html
<ul>
  <li class="current">Item 1</li>
  <li class="active">Item 2</li>
  <li>Item 3</li>
</ul>
```

```ts
$('.current').siblings('.active'); // Wraps only "Item 2"
```
