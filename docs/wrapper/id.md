# ElementWrapper.id()

## Definition

```ts
id(): string | undefined;
id(id: string): this;
```

## Description

Used for either getting or setting an ID of the first element.

## Examples

### Getting an ID:

```html
<div id="example"></div>
```

```ts
$('div').id(); // returns "example"
```

### Setting an ID:

```html
<div class="example"></div>
<div class="example"></div>
```

```ts
$('.example').id('newID');
```

The div will be updated to:

```html
<div id="newID"></div> <!-- Only the first element is changed -->
<div class="example"></div>
```
