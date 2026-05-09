# ElementWrapper.class.add()

This method adds a class to all of the selected elements.

```html
<div class="example"></div>
<div></div>
```

```ts
$('div').class.add('added');
```

The HTML will be updated to:

```html
<div class="example added"></div>
<div class="added"></div>
```

You can also add multiple classes, by seperating them with a space:

```html
<div class="example"></div>
<div></div>
```

```ts
$('div').class.add('added anotherAdded');
```

The HTML will be updated to:

```html
<div class="example added anotherAdded"></div>
<div class="added anotherAdded"></div>
```

After the class is added, the method returns `this`.
