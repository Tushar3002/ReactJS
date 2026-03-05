import React, { useMemo, useState } from 'react'

function UseMemoHook() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const doubleNumber = useMemo(() => {
    console.log("Calculating...")
    return count * 2
  }, [count])

  return (
    <div>
      <h2>{doubleNumber}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default UseMemoHook