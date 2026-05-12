# ElementWrapper.empty()

## Definition

```ts
empty(): this
```

## Description

Used for clearing the innerHTML of the selected elements.

## Example

```html
<div>
  <span>Text inside!</span>
</div>
```

```ts
$('div').empty();
```

The HTML will be updated to:

```html
<div></div>
```
