# ElementWrapper.width()

## Definition

```ts
width(): number | undefined;
width(value: number): this;
width(value: string): this;
```

## Description

Used for either getting or setting the width of the elements.

## Examples

### Getting the width
```ts
// Get the width of the first element (in pixels)
const height = $('.element').width();
```

### Setting the width

```ts
// Set the width of all elements (in pixels)
$('.element').width(100);

// Set the width of all elements with a string
$('.element').width("10rem");
```
