# ElementWrapper.toggle()

## Definition

```ts
toggle(): this
```

## Description

Toggles the visibility of all selected elements.

- If an element is currently visible, it is hidden (its `display` is set to `none` and the original value is saved).
- If an element is currently hidden, it is shown (the saved `display` value is restored, defaulting to `block`).

## Examples

```html
<div class="panel">Panel content</div>
```

```ts
$('.panel').toggle(); // Hides the panel
$('.panel').toggle(); // Shows it again
```

### Toggling on button click

```ts
$('#toggle-btn').on('click', () => {
  $('.panel').toggle();
});
```
