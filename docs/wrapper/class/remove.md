# ElementWrapper.class.remove()

## Definition
```ts
remove(name: string): this
```

## Description

Removes a class from all the elements.

## Example

```html
<div class="example"></div>
```

```ts
$('div').class.remove('example');
```

The HTML will be updated to:

```html
<div></div>
```
