# ElementWrapper.hide()
 
## Definition
 
```ts
hide(): this
```
 
## Description
 
Hides all selected elements by setting their `display` style to `none`.
 
The original `display` value is preserved internally so it can be restored later by [`.show()`](./show).
 
## Example
 
```html
<div class="alert">Something went wrong.</div>
```
 
```ts
$('.alert').hide();
```
 
The element will no longer be visible in the page.
 
```ts
// It can be shown again later
$('.alert').show();
```
