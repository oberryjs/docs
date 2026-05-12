# ElementWrapper.is()

## Definition

```ts
is(selector: string): boolean
```

## Description

Used for checking if the first element matches a css selector.

## Example

```html
<div id="first" class="active"></div>
<div id="second"></div>
```

```ts
$('#first').is('.active'); // returns true
$('#second').is('.active'); // returns false
```
