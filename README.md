# Week 9 - React Hooks Assignment

Four components demonstrating `useState`, `useEffect`, and `useRef`.

## Components
- `Counter.jsx` — increment/decrement/reset counter (useState)
- `TodoList.jsx` — add/delete todos with a controlled input (useState)
- `ProfileCard.jsx` — simulated 2s data load with cleanup (useState + useEffect)
- `SearchBox.jsx` — auto-focus input + render counter (useRef + useEffect)

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Testing checklist
- [ ] Counter increments, decrements, and resets
- [ ] Todo list adds new items
- [ ] Todo list deletes items
- [ ] Profile card shows "Loading..." then displays the profile after ~2 seconds
- [ ] Search box automatically focuses on page load
- [ ] Search box displays the text as you type, and the render count increases
- [ ] No console errors
