# $effectScope

`$effectScope` is an utility used to manage the lifecycle of multiple effects at once.
This is particularly useful inside components or complex plugins where you need to "clean up" many listeners simultaneously.

## Overview

```ts
import { $effectScope } from "oberry";

const stop = $effectScope(() => {
  $effect(() => { /* ... */ });
  $effect(() => { /* ... */ });
  
  // Any effects created inside this callback are grouped
});

// Stop all internal effects at once
stop();
```

## Examples

### Toggable Logger

```ts
let stopLogging;

$('#start-btn').on('click', () => {
  stopLogging = $effectScope(() => {
    $effect(() => console.log("Value A:", valA()));
    $effect(() => console.log("Value B:", valB()));
  });
});

$('#stop-btn').on('click', () => {
  if (stopLogging) stopLogging();
});
```
