# ElementWrapper.bindHTML()

## Definition

```ts
bindHTML<V>(ref: Ref<V>): this
```

## Description

Used for binding the value of a ref into the element's HTML content.

When the `$ref` value changes, the innerHTML gets updated.

## Example

```ts
const content = $ref('<span>Hello, world!</span>');

$('#counter').bind(count)
  
content('<p>Welcome</p>')
```
