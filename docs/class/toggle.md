# ElementWrapper.class.toggle()

This method toggles a class on all the elements.

If an elemnt has a specified class, it gets removed.
If it doesn't, it gets added.

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
After the class is toggled, the method returns `this`.
