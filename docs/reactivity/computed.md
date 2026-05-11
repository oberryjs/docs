# $computed

`$computed` creates a read-only reactive reference derived from other reactive values.

t automatically tracks any $ref or other $computed values accessed within its function. When those dependencies change, the computed value recalculates, which in turn notifies its own listeners (like DOM bindings or effects).

## Overview

```ts
import { $computed } from "oberry";

const derivedValue = $computed<T>(() => {
  // Logic involving other reactive values
  return result;
});
```

## Examples

### Basic Derivation

```ts
const price = $ref(100);
const quantity = $ref(2);

const total = $computed(() => price() * quantity());

console.log(total()); // 200
price(150);
console.log(total()); // 300
```

### Filtering

```ts
const search = $ref("");
const items = $ref(["Apple", "Banana", "Cherry"]);

const filteredItems = $computed(() => {
  const query = search().toLowerCase();
  return items().filter(item => item.toLowerCase().includes(query));
});
```