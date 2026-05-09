# ElementWrapper.class.get()

This returns an array of strings containing all the classes of the first element.

```html
<div class="wrapper example anotherClass"></div>
```

```ts
$('div').class.get();
```

This will return `['wrapper', 'example', 'anotherClass']`