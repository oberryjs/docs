# ElementWrapper.height()

## Definition

```ts
height(): number | undefined;
height(value: number): this;
height(value: string): this;
```

## Description

Used for either getting or setting the height of the elements.

## Examples

### Getting the height
```ts
// Get the height of the first element (in pixels)
const height = $('.element').height();
```

### Setting the height

```ts
// Set the height of all elements (in pixels)
$('.element').height(100);

// Set the height of all elements with a string
$('.element').height("10rem");
```
