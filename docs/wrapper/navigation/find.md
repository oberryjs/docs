# ElementWrapper.find()
 
## Definition
 
```ts
find(selector: string): ElementWrapper
```
 
## Description
 
Searches all descendants of the selected elements and returns a new `ElementWrapper` containing every match for the given CSS selector.
 
## Example
 
```html
<div class="card">
  <p class="title">Hello</p>
  <p>Subtitle</p>
</div>
<div class="card">
  <span>
    <p class="title">World</p>
  </span>
</div>
```
 
```ts
$('.card').find('.title'); // Wraps both .title paragraphs
```
