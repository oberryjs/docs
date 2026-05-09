# ElementWrapper.class.remove()

This method removes a class from all the elements.

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
After the class is removed, the method returns `this`.