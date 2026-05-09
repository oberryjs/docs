# ElementWrapper.class.has()

This method is used for checking if the first element has a class.
It returns a `boolean`.

```html
<div id="first" class="example"></div>
<div id="second"></div>
```

```ts
$('first').class.has('example') // returns true
$('second').class.has('example') // returns false
```
