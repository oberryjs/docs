# ElementWrapper.bindInput()

## Definition

```ts
bindInput<V>(ref: Ref<V>): this
```

## Description

Used for binding input into a `$ref` (two-way binding).

When the element triggers an `input` event, the `$ref` will be updated.
When the `$ref` is updated, the input value is automatically synced.

## Example

```ts
const username = $ref('')

$('#input').bindInput(username)
  
username('user123') // The input value will be changed
```
