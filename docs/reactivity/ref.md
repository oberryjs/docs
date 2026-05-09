# $ref

`$ref` creates a signal-based reactive value.

It is the foundation of the reactivity system. When a `$ref` changes, every computed value, effect, or DOM binding that depends on it updates automatically.

## Overview

```ts
import { $ref } from "oberry";
import type { Ref } from "oberry";

const value: Ref<T> = $ref(initialValue);
```

- Returns a getter/setter function
- Tracks dependencies automatically
- Triggers updates only where needed
- Works with $computed, $effect, and DOM bindings

## Creating a Ref

```ts
const count = $ref(0);
const message = $ref('Hello');
```

You can store any JavaScript value.

## Reading a Ref

To read the value, call it as a function:

```ts
const count = $ref(10);

console.log(count()); // 10
```

Reading a ref inside $computed or $effect automatically registers it as a dependency.

## Updating a Ref

To update the value, call it with a new value:
```ts
count(20);
```

Or with a function that returns the new value:

```ts
count(prev => prev + 1);
```

This:
- updates the internal value
- notifies dependents
- triggers reactivity updates


## Typing

You can use the `Ref<T>` type:

```ts
const name: Ref<string> = $ref("Willy Wonka");
```

## Examples

### Reactive Counter

```ts
const count: Ref<number> = $ref(0);

$('#counter').bind(count);

$('#increment').on('click', () => {
  count(prev => prev + 1);
});
```

### TODO List
```ts
const todos = $ref<string[]>([]);

const addTodo = (text: string) => {
  todos(prev => [...prev, text]);
}

const removeTodo = (index: number) => {
  todos(prev => prev.filter((_, i) => i !== index));
}
```

### Async Loading State

```ts
const loading: Ref<boolean> = $ref(false);
const data = $ref(null);

async function fetchData() {
  loading(true);

  const res = await fetch("/api/data");
  data(await res.json());

  loading(false);
}

$effect(() => {
  if (loading()) {
    $('#status').text("Loading...");
  } else {
    $('#status').text("Done");
  }
});
```
