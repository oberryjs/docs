# ElementWrapper.class.add()

## Definition
```ts
add(name: string): this
```

## Description

Adds one or more classes to all of the selected elements.
You can add multiple classes by seperating them with spaces.

## Example

```html
<div class="example"></div>
<div></div>
```

```ts
$('div').class.add('added another-added');
```

The HTML will be updated to:

```html
<div class="example added another-added"></div>
<div class="added another-added"></div>
```
