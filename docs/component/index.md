# $component()

## Definition

```ts
$component(
  name: string, 
  fn: (ctx: ComponentContext) => string,
  observedProps?: string[]
);
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
	onUnmounted: (cb: () => void) => void;
	$emit: (event: string, detail?: unknown) => void;
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

### onUnmounted()

Registers a cleanup function that runs right before the component is destroyed or before it remounts due to a prop change. Use this to clear timers or manual event listeners.

```ts
onUnmounted(() => {
  console.log('Component unmounted');
});
```

### $emit(event, detail)

Dispatches a CustomEvent from the component host. These events are configured to bubble and compose (cross the Shadow DOM boundary), making them easy to listen for in the parent DOM.

```ts
$emit('update', { value: 10 });
```

## Observed Attributes

The third argument, `observedProps`, is an array of attribute names. If any attribute listed here is changed on the HTML element, the component will:

- Run the onUnmounted callback.
- Stop the reactive effect scope.
- Re-run the component function and mount logic with the new values.

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
  },
  ['start']
);
```

```html
<x-counter start="10"></x-counter>
```
