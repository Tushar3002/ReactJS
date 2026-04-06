
# 🧭 Full Flow (Click → Data Update → UI Re-render)

## ✅ 1. You click a page button

```js
onClick={() => handlePageChange(idx + 1)}
```

This calls:

```js
handlePageChange(newPage)
```

---

## ✅ 2. `handlePageChange` runs

```js
navigate(`/dashboard?page=${newPage}`);
```

👉 This does **client-side navigation** (no full page reload)

So now the URL becomes:

```
/dashboard?page=2
```

---

## ⚡ 3. React Router detects URL change

React Router sees:

> “Hey, the route changed (even though it's the same path, query params changed).”

So it:

* Matches `/dashboard` route again
* Sees that it has a **loader**

👉 So it calls your loader again:

```js
getRec({ request })
```

---

## 📥 4. Loader receives the new `request`

Now inside your loader:

```js
request.url === "http://localhost:5173/dashboard?page=2"
```

Then:

```js
const url = new URL(request.url);
const page = parseInt(url.searchParams.get("page")) || 1;
```

👉 `page = 2`

---

## 🌐 5. API call happens

```js
const skip = (page - 1) * limit;
```

If:

```
page = 2
limit = 10
```

Then:

```
skip = 10
```

So API call:

```
https://dummyjson.com/recipes?limit=10&skip=10
```

👉 You now get the **next set of recipes**

---

## 📤 6. Loader returns data

```js
return { recipes, total, page, limit };
```

---

## 🔄 7. React Router updates your component

Now this line runs again:

```js
const recipeData = useLoaderData();
```

👉 React Router gives your component the **new data**

---

## 🎨 8. Component re-renders

Now:

```js
const { recipes, total, page, limit } = recipeData;
```

* `recipes` → new page data
* `page` → updated (2)
* UI updates automatically

---

## 🔁 9. Pagination UI updates too

```js
page === idx + 1 ? "bg-blue-500" : "bg-gray-200"
```

👉 Active page button changes color

---

# 🧠 One-Line Summary

👉 Click → `navigate()` → URL changes → loader runs → data fetched → `useLoaderData()` updates → UI re-renders

---

# 🔥 Visual Flow

```
Click button
   ↓
navigate("/dashboard?page=2")
   ↓
URL changes
   ↓
React Router runs loader
   ↓
getRec({ request })
   ↓
Extract page from request.url
   ↓
Fetch new data
   ↓
Return data
   ↓
useLoaderData() updates
   ↓
Component re-renders
```

---

# ⚡ Important Insight

👉 **You are not manually calling the loader**

React Router does it automatically **whenever the URL changes**.

That’s the key idea.

---

# 💡 Why this is better than useEffect

With `useEffect`, you'd do:

* watch `page`
* fetch manually
* manage loading state

Here:

* URL = source of truth
* Loader = data fetching
* Component = just UI

👉 Cleaner, more scalable

---
