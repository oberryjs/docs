# ElementWrapper.class.get()

## Definition
```ts
get(): string[]
````

## Description

Returns an array of strings containing all the classes of the first element.

## Example

```html
<div class="wrapper example anotherClass"></div>
```

```ts
$('div').class.get(); // Returns ['wrapper', 'example', 'anotherClass']
```
