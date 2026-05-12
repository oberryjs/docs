# ElementWrapper.data()

## Definition

```ts
data(key: string): string | undefined;
data(key: string, value: string): this;
```

## Description

Used for either getting or setting the value of a data atribute of the elements.

## Examples

### Getting the value

```html
<div data-user-id="67"></div>
```

```ts
// returns the data attribute value of the first element ("67")
$('div').data('user-id');
```

### Setting the value

```html
<div data-user-id="67"></div>
```

```ts
$('div').data('user-id', '42');
```

The HTML will be updated to:

```html
<div data-user-id="42"></div>
```
