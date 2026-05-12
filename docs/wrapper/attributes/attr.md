# ElementWrapper.attr()

## Definition

```ts
attr(key: string): string | undefined;
attr(key: string, value: string): this;
```

## Description

Used for either getting or setting the value of an atribute of the elements.

## Examples

### Getting the value

```html
<img src="/example.png" />
```

```ts
// returns the attribute value of the first element ("/example.png")
$('img').attr('src');
```

### Setting the value

```html
<img src="/example.png" />
```

```ts
$('.username').attr('src', '/image.jpg');
```

The HTML will be updated to:

```html
<img src="/image.jpg" />
```
