# Plugin System

## Definition

```ts
class Plugin {
  constructor(name: string, install: (extend: ExtendFunction) => void);
}

function use(plugin: Plugin): void;
```

```ts
type ExtendFunction = (
  name: string,
  func: (this: ElementWrapper, ...args: any[]) => any,
) => void;
```

## Description

The plugin system lets you extend `ElementWrapper` with custom methods. Create a `Plugin` with a name and an install function, then register it with `use()`.

Calling `use()` invokes the plugin's installer, passing an `extend` function. Each call to `extend(name, fn)` adds the method to every `ElementWrapper` instance, enabling chainable custom behavior.

Installing the same plugin twice is a no-op — a warning is logged and the duplicate install is ignored.

## Creating a Plugin

```ts
import { Plugin } from "oberry";

const myPlugin = new Plugin('myPlugin', extend => {
  extend('customMethod', function (value) {
    return this.css({ backgroundColor: value });
  });

  extend('fadeIn', function (duration = 300) {
    this.css({ opacity: 0, transition: `opacity ${duration}ms` });
    setTimeout(() => this.css({ opacity: 1 }), 10);
    return this;
  });
});
```

::: tip
Make sure that you use the `function` keyword inside the `extend()` function, and not the arrow function syntax.

In JavaScript arrow functions do not bind their own `this`, which would prevent access to the ElementWrapper instance inside the method.
:::

Inside the installer, `this` inside each extended function refers to the `ElementWrapper` instance, so you can call any existing wrapper method.

## Installing a Plugin

```ts
import { use } from "oberry";

use(myPlugin);
```

## Example

```ts
import { Plugin, use } from "oberry";

const highlight = new Plugin('highlight', extend => {
  extend('highlight', function (color = 'yellow') {
    return this.css({ backgroundColor: color });
  });
});

use(highlight);

$('.element').highlight('orange');
```
