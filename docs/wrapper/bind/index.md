# ElementWrapper.bind()

## Definition

```ts
bind<V>(ref: Ref<V>): this
```

## Description

Used for binding the value of a ref into the element's text content.

When the `$ref` value changes, the innerText gets updated.

## Example

```ts
const count = $ref(0);

$('#counter').bind(count)
  
count(10) // the innerText of #counter changes to "10"
```
