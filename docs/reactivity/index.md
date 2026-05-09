# Reactivity in oBerry

What makes oBerry stand out from different DOM utility libraries is it's built-in reactivity system, which allows for binding dynamic data to HTML without framework overhead.

Under the hood, oBerry uses a signal-based system powered by [alien-signals](https://github.com/stackblitz/alien-signals) . Each reactive value tracks who depends on it, and updates only those parts when it changes.

## Overview

### $ref

Used for creating a reactive, signal-based reference.

```ts
const count = $ref(0);
```

### $computed

Used for deriving values that updates automatically.

```ts
const firstName = $ref('John');
const lastName = $ref('Doe');

const fullName = $computed(() => {
  return `${firstName()} ${lastName()}`;
});
```

### $effect

Used running side effects when reactive values change

```ts
const count = $ref(0);

$effect(() => {
  console.log(`Count is now: ${count()}`);
  document.title = `Count: ${count()}`;
});

count(1); // Console: 'Count is now: 1', Title updates
count(2); // Console: 'Count is now: 2', Title updates
```

### $effectScope

Used for grouping multiple effects together.

```ts
const stopScope = $effectScope(() => {
  $effect(() => {
    console.log(`Count in scope: ${count()}`);
  });
});

// Stop all effects in the scope
stopScope();
```

### Binding

`ElementWrapper` comes with multiple methods for binding reactive values to HTML:

- [.bind()](../wrapper/bind/index.md)
- [.bindInput()](../wrapper/bind/input)
- [.bindHTML()](../wrapper/bind/html)
- [.bindAttr()](../wrapper/bind/attr)

