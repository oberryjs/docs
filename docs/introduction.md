# Introduction

Modern frontend development often forces a tradeoff:
- **React / frameworks** → powerful, but heavy for small projects
- **jQuery** → simple, but outdated and not reactive
- **Vanilla JS** → flexible, but repetitive and tedious for DOM-heavy apps

oBerry gives you a **modern**, **reactive**, **jQuery-like** API without needing a build setup or full framework.

---

With oBerry, you can:

- manipulate the DOM with a clean, chainable API
- use built-in fine-grained reactivity (no external state library)
- build small-to-medium UI features without framework overhead
- write TypeScript-first right out of the box

```ts
import { $, $ref } from 'oberry';

const count = $ref(0);

$("#counter").bind(count);

$("#increment-btn").on("click", () => {
  count(prev => prev + 1);
});

$("#decrement-btn").on("click", () => {
  count(prev => prev - 1);
});

```

### In this example:

- `count` is a `ref`, which we bind to `#counter` - any time the ref updates, the content of the counter will update too.
- We add event listeners to buttons, which increment / decrement the count value
