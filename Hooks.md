
### Planned Structure

```
React Hooks Guide
│
├── Part 1
│   ├── Introduction to Hooks
│   ├── Rules of Hooks
│   ├── useState
│
├── Part 2
│   ├── useEffect
│   ├── useRef
│
├── Part 3
│   ├── useContext
│   ├── useReducer
│
├── Part 4
│   ├── useMemo
│   ├── useCallback
│   ├── React.memo
│
├── Part 5
│   ├── useLayoutEffect
│   ├── useImperativeHandle
│   ├── useId
│
├── Part 6
│   ├── Custom Hooks
│   ├── Best Practices
│   ├── Interview Tips
```

---

# 📘 React Hooks Guide (Part 1)

````md
# React Hooks Complete Guide

## What are Hooks?

Hooks are special functions in React that allow functional components to use:
- state
- lifecycle methods
- context
- refs
- performance optimizations

Before Hooks, these features were only available in **class components**.

Example (Functional Component with Hook):

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
````

---

# Rules of Hooks

React Hooks must follow two important rules.

## 1. Only call hooks at the top level

❌ Wrong

```jsx
if (condition) {
  useEffect(() => {});
}
```

✅ Correct

```jsx
useEffect(() => {
  if (condition) {
    // logic
  }
}, []);
```

---

## 2. Only call hooks inside React functions

Hooks can be used in:

* React Functional Components
* Custom Hooks

❌ Wrong

```js
function normalFunction(){
  useState(0)
}
```

✅ Correct

```js
function MyComponent(){
  useState(0)
}
```

---

# useState Hook

`useState` allows functional components to manage **state**.

Syntax:

```jsx
const [state, setState] = useState(initialValue)
```

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

---

# Updating State Based on Previous State

Sometimes state depends on the previous value.

Example:

```jsx
setCount(prevCount => prevCount + 1);
```

This prevents stale state issues.

Example:

```jsx
<button onClick={() => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}}>
Double Increment
</button>
```

Result:

```
count increases by 2
```

---

# useState with Objects

```jsx
const [user, setUser] = useState({
  name: "John",
  age: 25
});
```

Updating state:

```jsx
setUser({
  ...user,
  age: 26
});
```

---

# useState with Arrays

```jsx
const [items, setItems] = useState([]);
```

Add item:

```jsx
setItems([...items, newItem]);
```

Remove item:

```jsx
setItems(items.filter(item => item.id !== id));
```

---

# When to use useState

Use useState when:

* simple state management
* form inputs
* toggles
* counters
* small UI states

Example:

* modal open/close
* loading state
* input fields

```


```


# 📘 React Hooks Guide (Part 2)

````md
# useEffect Hook

`useEffect` allows you to perform **side effects** in React components.

Examples of side effects:

- API calls
- DOM manipulation
- timers
- subscriptions
- event listeners
- logging

---

# Basic Syntax

```jsx
useEffect(() => {
  // side effect code

  return () => {
    // cleanup (optional)
  }

}, [dependencies])
```

Structure explanation:

```
useEffect(
  effectFunction,
  dependencyArray
)
```

---

# Example 1: Run Effect After Every Render

```jsx
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Rendered");
  });

  return <h1>Hello</h1>;
}
```

Behavior:

```
Runs after EVERY render
```

---

# Example 2: Run Only Once (Component Mount)

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

Dependency array is empty:

```
[]
```

Behavior:

```
Runs only once when component mounts
```

Equivalent to class lifecycle:

```
componentDidMount
```

---

# Example 3: Run When Dependency Changes

```jsx
import { useEffect, useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

Behavior:

```
Effect runs only when count changes
```

---

# Example 4: Fetch API Data

```jsx
import { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));

  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

---

# Cleanup Function

Cleanup runs when:

* component unmounts
* dependency changes

Example:

```jsx
useEffect(() => {

  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };

}, []);
```

This prevents **memory leaks**.

---

# Lifecycle Mapping

React Hooks replaced class lifecycle methods.

| Class Lifecycle      | Hook Equivalent                   |
| -------------------- | --------------------------------- |
| componentDidMount    | useEffect(() => {}, [])           |
| componentDidUpdate   | useEffect(() => {}, [dependency]) |
| componentWillUnmount | cleanup function                  |

---

# Multiple useEffect

You can use multiple effects.

Example:

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);

useEffect(() => {
  console.log("Count changed");
}, [count]);
```

Benefits:

```
Better separation of logic
```

---

# useRef Hook

`useRef` is used to:

1. Access DOM elements
2. Store mutable values without causing re-renders

---

# Syntax

```jsx
const ref = useRef(initialValue)
```



# React Hooks Guide (Part 2 – continued)

## Example 1: Access DOM Element

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}
```

### Explanation

```
inputRef.current → actual DOM element
```

---

## Example 2: Store Mutable Value

```jsx
import { useRef, useState } from "react";

function Timer() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current++;

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Renders: {renderCount.current}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

### Important

```
Updating useRef does NOT trigger re-render
```

---

## useRef vs useState

| Feature             | useState | useRef |
| ------------------- | -------- | ------ |
| Causes re-render    | Yes      | No     |
| Stores value        | Yes      | Yes    |
| Used for DOM access | No       | Yes    |

---

## When to Use useRef

Common use cases:

* accessing input fields
* storing timers
* storing previous values
* avoiding unnecessary re-renders

---

# React Hooks Guide (Part 3)

This section explains **useContext** and **useReducer**, which are very important for **state management in medium-large React apps**.

---

# useContext Hook

`useContext` allows components to access **global data** without passing props manually through every level.

This solves the problem called:

```
Prop Drilling
```

Example of prop drilling:

```
App → Parent → Child → GrandChild → Button
```

Passing props through all components becomes messy.

Context allows **direct access to shared data**.

---

# Steps to Use Context

1. Create Context
2. Provide Context
3. Consume Context

---

# Step 1: Create Context

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

# Step 2: Provide Context

```jsx
import { ThemeContext } from "./ThemeContext";

function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}
```

Now every component inside `Provider` can access the theme.

---

# Step 3: Consume Context

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Child() {
  const theme = useContext(ThemeContext);

  return <h1>Theme: {theme}</h1>;
}
```

---

# Example: Global User Data

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = {
    name: "John",
    age: 25
  };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);

  return <h2>{user.name}</h2>;
}
```

---

# When to Use useContext

Good for global data like:

* authentication user
* theme (dark/light)
* language
* app settings

Not recommended for **very frequently changing data**.

---

# useReducer Hook

`useReducer` is used for **complex state logic**.

It works similar to **Redux pattern**.

Structure:

```
state + action → reducer → new state
```

---

# Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Explanation

| Element      | Purpose                     |
| ------------ | --------------------------- |
| reducer      | function that updates state |
| state        | current state               |
| dispatch     | function to send action     |
| initialState | starting value              |

---

# Reducer Function

```jsx
function reducer(state, action) {

  switch(action.type) {

    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }

}
```

Reducer always returns **new state**.

---

# Basic Example

```jsx
import { useReducer } from "react";

function reducer(state, action) {

  switch(action.type) {

    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }

}

function Counter() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );
}
```

---

# Reducer Flow

```
User clicks button
      ↓
dispatch(action)
      ↓
reducer(state, action)
      ↓
returns new state
      ↓
React updates UI
```

---

# Example: Todo List with useReducer

```jsx
const initialState = [];

function reducer(state, action) {

  switch(action.type) {

    case "add":
      return [...state, action.payload];

    case "remove":
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}
```

### Usage

```jsx
const [todos, dispatch] = useReducer(reducer, initialState);
```

### Add Todo

```jsx
dispatch({
  type: "add",
  payload: { id: 1, text: "Learn React" }
});
```

### Remove Todo

```jsx
dispatch({
  type: "remove",
  payload: 1
});
```

---

# useState vs useReducer

| Feature          | useState  | useReducer  |
| ---------------- | --------- | ----------- |
| Simple state     | Yes       | Not needed  |
| Complex logic    | Harder    | Better      |
| Multiple actions | Difficult | Easy        |
| Large state      | Not ideal | Recommended |

---

# When to Use useReducer

Use it when:

* state logic is complex
* multiple state transitions
* many actions
* large applications

Example use cases:

```
shopping cart
form management
todo apps
state machines
```

---

# React Hooks Guide (Part 4)

This section focuses on **performance optimization**:

* useMemo
* useCallback
* React.memo

---

# Performance Optimization in React

React re-renders components whenever **state or props change**.

Sometimes this causes **unnecessary computations or re-renders**, which can slow down the application.

React provides optimization tools:

* useMemo
* useCallback
* React.memo

These use **memoization**.

Memoization means:

```
Caching results to avoid recalculating them.
```

---

# useMemo Hook

`useMemo` memoizes the **result of a function**.

This prevents expensive calculations from running on every render.

---

# Syntax

```jsx
const memoizedValue = useMemo(() => {
  return computation;
}, [dependencies]);
```

### Explanation

| Part             | Meaning                    |
| ---------------- | -------------------------- |
| function         | calculation                |
| dependency array | when recalculation happens |

---

# Example: Expensive Calculation

```jsx
import { useState, useMemo } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Re-render
      </button>
    </>
  );
}
```

### Without useMemo

```
expensiveCalculation runs on every render
```

### With useMemo

```
Runs only when number changes
```

---

If you want, I can also **fix the rest of your file (1041 → 1647)** and turn the whole thing into a **perfectly structured React Hooks handbook `.md`** with:

* Table of contents
* Clean headings
* Interview tips
* Common mistakes
* Hook decision guide

It will look like a **mini React documentation you can reuse forever.** 🚀

Your content is **mostly correct**, but there are **two Markdown formatting issues** that will break rendering in editors like **VSCode / GitHub**:

1. **Nested code blocks using ````md** (4 backticks) mixed with ```jsx
2. **Extra closing ``` at the end of sections**

I cleaned and **rewrote this entire section so it renders perfectly** in Markdown.

You can paste this directly into your `.md` file.

---

# React Hooks Guide (Part 4 – continued)

## useCallback Hook

`useCallback` memoizes **functions**.

This prevents functions from being recreated on every render.

---

## Syntax

```jsx
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```

---

## Problem Without useCallback

Every render creates a **new function reference**.

Example:

```jsx
function Parent() {

  const handleClick = () => {
    console.log("clicked");
  };

  return <Child onClick={handleClick} />;
}
```

Even if logic is the same, React treats it as a **new function on each render**.

---

## Example With useCallback

```jsx
import { useCallback } from "react";

function Parent() {

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return <Child onClick={handleClick} />;
}
```

Now the function reference stays **stable across renders**.

---

# React.memo

`React.memo` prevents a **component from re-rendering if its props have not changed**.

---

## Syntax

```jsx
const MyComponent = React.memo(Component);
```

or

```jsx
const MyComponent = React.memo(function Component(props) {
  return <div>{props.value}</div>;
});
```

---

## Example Without React.memo

Child component:

```jsx
function Child({ value }) {
  console.log("Child Rendered");
  return <p>{value}</p>;
}
```

Parent:

```jsx
function Parent() {

  const [count, setCount] = useState(0);

  return (
    <>
      <Child value={10} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

Problem:

```
Child re-renders even though props didn't change
```

---

## Example With React.memo

```jsx
const Child = React.memo(function Child({ value }) {
  console.log("Child Rendered");
  return <p>{value}</p>;
});
```

Now:

```
Child renders only when props change
```

---

# Real Example: useCallback + React.memo

Child Component:

```jsx
const Button = React.memo(({ onClick }) => {
  console.log("Button Rendered");

  return <button onClick={onClick}>Click</button>;
});
```

Parent:

```jsx
function Parent() {

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return <Button onClick={handleClick} />;
}
```

Why this works:

```
useCallback → stable function
React.memo → prevents unnecessary child re-render
```

---

# Difference Between useMemo and useCallback

| Feature  | useMemo                | useCallback       |
| -------- | ---------------------- | ----------------- |
| Memoizes | Value                  | Function          |
| Returns  | Result                 | Function          |
| Usage    | Expensive calculations | Passing callbacks |

---

# Important Fact

`useCallback` is actually built on top of `useMemo`.

These two are almost the same:

```jsx
const fn = useCallback(() => doSomething(), []);
```

Equivalent to:

```jsx
const fn = useMemo(() => () => doSomething(), []);
```

---

# When NOT to Use These Hooks

Avoid **premature optimization**.

Do NOT use them for:

* small components
* cheap calculations
* simple UI

Use them when:

```
large lists
heavy calculations
frequent re-renders
performance bottlenecks
```

---

# React Hooks Guide (Part 5)

## useLayoutEffect Hook

`useLayoutEffect` is similar to `useEffect`, but it **runs synchronously after all DOM mutations and before the browser paints**.

Use it when you need to **read or change the DOM immediately after render**.

---

## Syntax

```jsx
useLayoutEffect(() => {
  // code that reads or writes DOM
}, [dependencies]);
```

---

## Example: Measuring DOM Elements

```jsx
import { useRef, useLayoutEffect, useState } from "react";

function Box() {

  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);

  return (
    <>
      <div ref={boxRef} style={{ width: "50%" }}>Box</div>
      <p>Box width: {width}px</p>
    </>
  );
}
```

Difference from `useEffect`:

* `useEffect` → runs **after paint** (may cause flicker)
* `useLayoutEffect` → runs **before paint**

---

# useImperativeHandle Hook

`useImperativeHandle` is used with **forwardRef** to customize what a parent component can access on a child component.

---

## Syntax

```jsx
useImperativeHandle(ref, () => ({
  customMethod() {
    // exposed method
  }
}));
```

---

## Example: Forwarding Ref

Child component:

```jsx
import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((props, ref) => {

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});
```

Parent component:

```jsx
function Parent() {

  const childRef = useRef();

  return (
    <>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.focusInput()}>
        Focus Child Input
      </button>
    </>
  );
}
```

---

# useId Hook (React 18+)

`useId` generates **stable unique IDs** for accessibility and forms.

---

## Syntax

```jsx
const id = useId();
```

---

## Example

```jsx
import { useId } from "react";

function InputField() {

  const id = useId();

  return (
    <>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </>
  );
}
```

Benefit:

```
IDs remain stable across server and client renders
```

---

# useDebugValue Hook

`useDebugValue` is used in **custom hooks** to display useful debug information in React DevTools.

---

## Syntax

```jsx
useDebugValue(value);
```

---

## Example

```jsx
import { useState, useDebugValue } from "react";

function useOnlineStatus() {

  const [online, setOnline] = useState(true);

  useDebugValue(online ? "Online" : "Offline");

  return online;
}
```

In DevTools you will see:

```
Online
```

---

# Summary of Advanced Hooks

| Hook                | Use Case             |
| ------------------- | -------------------- |
| useLayoutEffect     | DOM measurements     |
| useImperativeHandle | Customize ref access |
| useId               | Generate stable IDs  |
| useDebugValue       | Debug custom hooks   |

---

# React Hooks Guide (Part 6)

## Custom Hooks

Custom hooks allow you to **reuse logic across components**.

They are **JavaScript functions that start with `use` and can call other hooks**.

---

## Syntax

```jsx
function useCustomHook(args) {
  // hooks logic
  return value;
}
```

---

## Example: useToggle Hook

```jsx
import { useState } from "react";

function useToggle(initialValue = false) {

  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);

  return [value, toggle];
}
```

Usage:

```jsx
function App() {

  const [isOpen, toggleOpen] = useToggle();

  return (
    <>
      <button onClick={toggleOpen}>Toggle</button>
      {isOpen && <p>Content visible</p>}
    </>
  );
}
```

---

## Example: useFetch Hook

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
```

Usage:

```jsx
function Users() {

  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

# Best Practices for Hooks

1. **Follow Rules of Hooks**

* Only call hooks at the top level
* Only call hooks inside React functions

2. **Keep state minimal**

3. **Use useReducer for complex state**

4. **Memoize expensive calculations**

* `useMemo` → values
* `useCallback` → functions
* `React.memo` → components

5. **Cleanup side effects in useEffect**

6. **Avoid unnecessary re-renders**

---

# Hooks Interview Tips

Common interview topics:

1. Difference between `useState` and `useReducer`
2. Dependency array in `useEffect`
3. When to use `useMemo` / `useCallback`
4. `useRef` vs `useState`
5. Writing custom hooks
6. Rules of Hooks
7. `useLayoutEffect` vs `useEffect`
8. How `useContext` works
9. Memoization concept
10. Cleanup functions to prevent memory leaks

---

# Quick Hooks Reference

| Hook                | Purpose                      |
| ------------------- | ---------------------------- |
| useState            | Manage component state       |
| useEffect           | Side effects                 |
| useLayoutEffect     | DOM effects before paint     |
| useRef              | DOM access / mutable values  |
| useReducer          | Complex state logic          |
| useContext          | Access global context        |
| useMemo             | Memoize values               |
| useCallback         | Memoize functions            |
| React.memo          | Prevent component re-renders |
| useImperativeHandle | Customize ref methods        |
| useId               | Unique IDs                   |
| useDebugValue       | Debug custom hooks           |
| Custom Hooks        | Reusable logic               |

---

If you want, I can also help you **upgrade this `.md` into a professional React handbook** with:

* 📑 Table of Contents
* 🔗 Section links
* ⚠️ Common mistakes
* 🧠 Interview trick questions
* 📊 Hook decision flowchart

That would make it **10× better for long-term reference**.
