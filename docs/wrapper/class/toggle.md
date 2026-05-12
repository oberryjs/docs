# ElementWrapper.class.toggle()

## Definition
```ts
toggle(name: string): this
```


## Description

This method toggles a class on all the elements.

If an elemnt has a specified class, it gets removed.
If it doesn't, it gets added.

## Example

```html
<div></div>
<div class="example"></div>
```

```ts
$('div').class.toggle('example');
```

The HTML will be updated to:

```html
<div class="example"></div>
<div></div>
```
