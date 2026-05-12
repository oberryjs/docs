# $new

## Definition

```ts
$new(
	tag: string,
	...children: ElementWrapper[]
): ElementWrapper
```

## Description

Used for creating new elements.


## Examples


```ts
const item = $new('li').text('Item');

$('ul').append(item);
```

### Creating an element with children

```ts
const list = $new(
  'ul',
  $new('li').text('Item #1'),
  $new('li').text('Item #2'),
  $new('li').text('Item #3'),
);

$('body').append(list);
```
