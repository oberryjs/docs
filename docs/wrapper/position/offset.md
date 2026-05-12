# ElementWrapper.offset()

## Definition

```ts
offset(): { top: number; left: number } | undefined 
```

## Description

Used for getting the current coordinates of the first element relative to the document.

## Example

```ts
const offset = $('.element').offset();
console.log(offset.top);  // Distance from top of document
console.log(offset.left); // Distance from left of document
```
