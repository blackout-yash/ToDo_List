import Header from './MyComponent/Header';
import { AddTodo } from './MyComponent/AddTodo';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';
import { About } from './MyComponent/About';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Main katam ho gaya", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const addTodo = (title, desc) => {
    console.log("Added", title, desc);

    let sno;
    if (todos.length === 0) sno = 1;
    else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <>
      <Router>
        <Header title="ToDo's List" searchBar={false} />         
        <Routes>
          <Route path="/" element={
            <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
          }></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App; 