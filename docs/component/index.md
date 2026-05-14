# $component()

## Definition

```ts
$component<P extends string = string>(
  name: string,
  fn: (ctx: ComponentContext<P>) => string
);
```

## Description

`$component()` registers a custom HTML element with oBerry.
It allows you to create reusable components using:

- Scoped DOM access
- Reactive attribute-based props
- Shadow DOM encapsulation

## Component Context

The component function receives a context object:

```ts
type PropsRefs<K extends string = string> = Record<K, Ref<string | undefined>>;

interface ComponentContext<P extends string = string> {
  $: typeof globalSelector;
  $host: ElementWrapper;
  props: PropsRefs<P>;
  onMounted: (cb: () => void) => void;
  onUnmounted: (cb: () => void) => void;
  $emit: (event: string, detail?: unknown) => void;
}
```

### $

A scoped selector that only queries inside the component's shadow DOM.

```ts
$('button');
```

This **does not access the global DOM** — only the component.

### $host

An `ElementWrapper` around the component's host element — the custom element itself in the outer DOM.

Use `$host` when you need to operate on the host element directly, such as setting ARIA attributes or managing focus.

```ts
$component('my-dialog', ({ $host, onMounted }) => {
  onMounted(() => {
    $host.attr('role', 'dialog');
  });

  return ``;
});
```

### props

All element attributes are available as `Ref<string | undefined>`. When an attribute changes on the host element, the corresponding ref updates reactively.

```html
<my-component title="Hello"></my-component>
```

```ts
$component(
  'my-component',
  ({ props }) => {
    const { title } = props;
    console.log(title()); // "Hello"
    return '';
  }
)
```

You can pass a union of known prop names as the type parameter for full TypeScript autocomplete:

```ts
$component<'title' | 'count'>(
  'my-component',
  ({ props }) => {
    const { title, count } = props;
    return ''
  }
)
```

Since props are plain `Ref` values, they compose directly with the rest of oBerry's reactive API — `bind()`, `bindHTML()`, `$effect()`, `$computed()`, and so on.

### onMounted()

Registers a callback that runs inside a reactive effect scope after the component is rendered.

```ts
onMounted(() => {
  console.log('Component mounted');
});
```

This is useful for:
- Setting up reactive effects
- Binding refs to DOM nodes
- Attaching event listeners

### onUnmounted()

Registers a cleanup function that runs right before the component is destroyed. Use this to clear timers or manual event listeners.

```ts
onUnmounted(() => {
  console.log('Component unmounted');
});
```

### $emit(event, detail)

Dispatches a `CustomEvent` from the component host. These events are configured to bubble and compose (cross the Shadow DOM boundary), making them easy to listen for in the parent DOM.

```ts
$emit('update', { value: 10 });
```

## Example

```ts
import { $ref, $component } from "oberry";

$component<'start'>(
  "x-counter",
  ({ $, props, onMounted }) => {
    const { start } = props;
    const count = $ref<number>(Number(start() ?? 0));

    onMounted(() => {
      $("#counter").bind(count);

      $("button").on("click", () => {
        count(prev => prev + 1);
      });
    });

    return `
      <h1 id="counter">${start() ?? 0}</h1>
      <button>+</button>
    `
  }
);
```

```html
<x-counter start="10"></x-counter>
```

Changing the `start` attribute on the host element after mount will reactively update any effects or bindings that depend on `props.start` — no remount occurs.
