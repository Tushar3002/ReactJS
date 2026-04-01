
```md
## 🔹 Simple Analogy (Redux Toolkit Flow)

Think of Redux like a warehouse system:

- **createSlice** → factory 🏭 (creates logic + actions)
- **taskReducer.reducer** → product 📦 (actual reducer function)
- **configureStore** → warehouse 🏬 (stores everything)
- **taskReducer (key)** → shelf label 🏷️ (where it is stored)
- **useSelector** → picking item from shelf 🛒 (reading data)
- **dispatch** → placing new items in warehouse 📥 (updating data)

---

## 🔹 Data Flow Diagram

```

createSlice()
↓
taskReducer.reducer
↓
configureStore({
reducer: {
taskReducer: ...
}
})
↓
Redux Store (state)
↓
state.taskReducer
↓
useSelector(state => state.taskReducer.task)

````

---

## 🔹 State Shape (Very Important)

After configuring store:

```js
state = {
  taskReducer: {
    task: [],
    status: "idle",
    error: null
  }
}
````

👉 That’s why we access:

```js
state.taskReducer.task
```

---

## 🔹 Action Flow (Update Cycle)

```
dispatch(addTask("New Task"))
        ↓
reducer runs (inside slice)
        ↓
state updates
        ↓
useSelector detects change
        ↓
component re-renders
```

---

## 🔹 Async Flow (createAsyncThunk)

```
dispatch(fetchTask())
        ↓
fetchTask.pending   → loading
fetchTask.fulfilled → success (data comes)
fetchTask.rejected  → error
        ↓
extraReducers handle these
        ↓
state updates
```

---

## 🔹 Key Concepts

* `createSlice` = combines **actions + reducer**
* `reducers` = for **synchronous logic**
* `extraReducers` = for **asynchronous logic**
* `useSelector` = read data from store
* `dispatch` = update data in store

---

## 🔹 Golden Rule 🧠

> Sync → `reducers`
> Async → `extraReducers`

---

## 🔹 Pro Tip 🚀

You can rename the slice key in store:

```js
configureStore({
  reducer: {
    todos: taskReducer.reducer
  }
})
```

Then access it like:

```js
state.todos.task
```

👉 The key name controls how you access state — not the slice name!

```
```
