# ElementWrapper.value()

## Definition

```ts
value(): string | undefined;
value(newValue: string): this;
```

## Description

Used for either getting or setting the value of the elements.

## Examples

### Getting the value

```html
<input class="username" value="user123" />
<input class="username" value="2nd input" />
```

```ts
$('div').value(); // returns the value of the first element ("user123")
```

### Setting the value

```html
<input class="username" value="user123" />
<input class="username" value="2nd input" />
```

```ts
$('.username').value('new value');
```

The HTML will be updated to:

```html
<input class="username" value="new value" />
<input class="username" value="new value" />
```
