# $effect

`$effect` is used to perform side effects (like logging, manual DOM manipulation, or API calls) whenever reactive dependencies change.

## Overview

```ts
import { $effect } from "oberry";

const stop = $effect(() => {
  // This code runs immediately, and again whenever 
  // any reactive values used here change.
});

stop(); // Stops the effect
```

## Examples

### Syncing to LocalStorage

```ts
const theme = $ref(localStorage.getItem('theme') || 'light');

$effect(() => {
  localStorage.setItem('theme', theme());
  $('body').class.remove('light', 'dark').class.add(theme());
});
```

### Tracking Document State

```ts
const cartItems = $ref([]);

$effect(() => {
  const count = cartItems().length;
  document.title = `Cart (${count})`;
});
```