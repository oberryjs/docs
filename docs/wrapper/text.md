# ElementWrapper.text()

## Definition

```ts
text(): string | undefined;
text(content: string): this;
```

## Description

Used for either getting or setting the innerText of the elements.

## Examples

### Getting the text

```html
<div>
  <p>Hello, world!</p>
</div>
<div>
  Another div
</div>
```

```ts
$('div').text(); // Returns the text of the first element. "Hello, world!"
````

### Setting the text

```html
<div>
  <p>Hello, world!</p>
</div>
<div>
  Another div
</div>
```

```ts
$('div').html('Goodbye, world!');
```

The HTML will be updated to:

```html
<div>Goodbye, world!</div>
<div>Goodbye, world!</div>
```
