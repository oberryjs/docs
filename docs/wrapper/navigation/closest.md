# ElementWrapper.closest()
 
## Definition
 
```ts
closest(selector: string): ElementWrapper
```
 
## Description
 
Traverses the DOM upward returns a new `ElementWrapper` containing the nearest ancestor that matches the given CSS selector.
 
If no match is found, an empty wrapper is returned.
 
## Example
 
```html
<div class="modal">
  <div class="modal-body">
    <button class="close-btn">Close</button>
  </div>
</div>
```
 
```ts
$('.close-btn').closest('.modal'); // Wraps the .modal div
```
