# ElementWrapper.bindAttr()

## Definition

```ts
bindAttr<V>(attr: string, ref: Ref<V>): this
```

## Description

Used for binding the value of a ref into the element's attribute.

When the `$ref` value changes, the atrribute value also gets updated.

## Example

```ts
const src = $ref('/image.png');

$('#img').bindAttr('src', src)
  
src('/image2.png')
```
