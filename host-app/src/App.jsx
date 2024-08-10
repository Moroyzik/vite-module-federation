import { useState } from 'react'

import List from "remote_app/List";
import Input from "remote_app/Input";

function App() {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    const onSubmit = () => {
        setTodos((prev) => [...prev, newTodo]);
        setNewTodo("");
    };

  return (
    <>
        <Input value={newTodo} onChange={handleChange} onSubmit={onSubmit} />
        <List items={todos} />
    </>
  )
}

export default App
