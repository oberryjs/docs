# ElementWrapper.html()

## Definition

```ts
html(): string | undefined;
html(content: string): this;
```

## Description

Used for either getting or setting the innerHTML of the elements.

## Examples

### Getting the HTML

```html
<div>
  <p>Hello, world!</p>
</div>
<div>
  Another div
</div>
```

```ts
$('div').html(); // Returns the HTML of the first element. "<p>Hello, world!</p>"
````

### Setting the HTML

```html
<div>
  <p>Hello, world!</p>
</div>

<div>
  Another div
</div>
```

```ts
$('div').html('<p>Goodbye, world!</p>');
```

The HTML will be updated to:

```html
<div>
  <p>Goodbye, world!</p>
</div>
<div>
  <p>Goodbye, world!</p>
</div>
```
