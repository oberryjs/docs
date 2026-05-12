# $component()

## Definition

```ts
$component(name: string, fn: (ctx: ComponentContext) => string); 
```

## Description

`$component()` registers a custom HTML element with oBerry.

It allows you to create reusable components using:
- Scoped DOM access
- Attribute-based props
- Shadow DOM encapsulation

## Component Context

The component function receives a context object:

```ts
interface ComponentContext {
  $: typeof globalSelector;
  props: Record<string, string>;
  onMounted: (cb: () => void) => void;
}
```

### $

A scoped selector that only queries inside the component’s shadow DOM.

```ts
$('button');
```

This does NOT access the global DOM — only the component.

### props

All element attributes are available as strings:

```html
<my-component title="Hello"></my-component>
```

```ts
$component(
  'my-component',
  ({ props }) => {
    console.log(props.title); // "Hello"
    return ''
  }
)
```

### onMounted()

Registers a callback that runs inside a reactive effect scope after the component is rendered.

```ts
onMounted(() => {
  console.log('Component mounted');
});
```

This is useful for:
- setting up reactive effects
- binding refs to DOM Nodes
- attaching listeners

## Example

```ts
import { $ref, $component } from "oberry";

$component(
  "x-counter",
  ({ $, props, onMounted }) => {
    const count = $ref<number>(Number(props.start ?? 0));

    onMounted(() => {
      $("#counter").bind(count);

      $("button").on("click", () => {
        count(prev => prev + 1);
      });
    });

    return `
      <h1 id="counter">${props.start ?? 0}</h1>
      <button>+</button>
    `
  }
);
```

```html
<x-counter start="10"></x-counter>
```
