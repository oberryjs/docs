# Element Selection

The `$()` function is the primary entry point for working with the DOM in oBerry. It allows you to select elements using CSS selectors, wrap native DOM nodes, and access the full oBerry chainable API.

## Overview

```ts
$(selector)
$(element)
$(nodeList)
$(arrayOfElements)
```

Returns a wrapped oBerry element collection with chainable methods for DOM manipulation, traversal, and reactivity.

## Usage

### CSS Selector

Select elements using standard CSS selectors:

```ts
$('.button');
$('#app');
$('div');
$('input[type="text"]');
```

### Single DOM Element

Wrap a native DOM element:

```ts
const el = document.getElementById('app');

$(el);
```

### NodeList / HTMLCollection

```ts
const items = document.querySelectorAll('.item');

$(items);
```

### Array of Elements

You can also pass arrays of elements:

```ts
const nodes = [
  document.getElementById('a'),
  document.getElementById('b'),
];

$(nodes).class.add('active');
```

## Generic Typing (TypeScript)

For better type safety, you can specify element types:

```ts
$<HTMLButtonElement>('.btn').on('click', () => {
  console.log('clicked');
});
```