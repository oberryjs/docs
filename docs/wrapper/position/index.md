
# ElementWrapper.offset()

## Definition

```ts
position(): { top: number; left: number } | undefined 
```

## Description

Used for getting the current coordinates of the first element relative to its offset parent.

## Example

```ts
const position = $('.element').position();
console.log(position.top);  // Distance from offset parent
console.log(position.left); // Distance from offset parent
```
