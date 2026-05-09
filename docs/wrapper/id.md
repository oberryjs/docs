# ElementWrapper.id()

The `id()` method is used for:

### Getting an ID of the first element:

```html
<div id="example"></div>
```

```ts
$('div').id();
```

This will return `"example"`.

### Setting an ID of the first element:

```html
<div id="example"></div>
```

```ts
$('div').id('newID');
```

After the the div will be updated to:

```html
<div id="newID"></div>
```

After the new ID is set, the method returns `this`.
