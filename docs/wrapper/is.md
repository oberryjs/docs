# ElementWrapper.is()

This method is used for checking if the first element matches a css selector. It returns a `boolean`

```html
<div id="first" class="active"></div>
<div id="second"></div>
```

```ts
$('#first').is('.active'); // returns true
$('#second').is('.active'); // returns false
```
