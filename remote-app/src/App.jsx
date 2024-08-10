import { useState } from 'react'

import List from "./components/List/List.jsx";
import Input from "./components/Input/Input.jsx";

const items = ["Learn React", "Learn Vite", "Learn Module federation"]

function App() {
  const [count, setCount] = useState(0)

    const handleSubmit = (value) => {
        console.log('value', value)
    }

    const handleChange = (event) => {
      setCount(+event.target.value)
    }

  return (
    <>
        <Input value={count} onChange={handleChange} onSubmit={handleSubmit} />
        <List items={items} />
    </>
  )
}

export default App
