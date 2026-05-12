# ElementWrapper.class.has()

## Definition
```ts
has(name: string): boolean
````


## Description
Used for checking if the first element has a class.

## Example

```html
<div id="first" class="example"></div>
<div id="second"></div>
```

```ts
$('first').class.has('example') // returns true
$('second').class.has('example') // returns false
```
