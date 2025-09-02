import { useState } from 'react';

const TodoList = () => {
  // Defineeritakse kaks oleku muutujat: 'todos' ja 'inputValue'.
  // 'todos' on massiiv, mis hoiab kõiki ülesandeid, ja 'setTodos' on funktsioon selle muutmiseks.
  // 'inputValue' on string, mis hoiab praegust sisestusvälja väärtust, ja 'setInputValue' on funktsioon selle muutmiseks.
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Defineeritakse funktsioon 'addTodo', mis lisab uue ülesande.
  // Kui 'inputValue' ei ole tühi (pärast tühikute eemaldamist), lisatakse see 'todos' massiivi.
  // Iga ülesanne on objekt, millel on unikaalne 'id', 'text' ja 'completed' olek.
  // Pärast ülesande lisamist tühjendatakse 'inputValue'.
  function addTodo() {
    if (inputValue.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  }

  // Defineeritakse funktsioon 'toggleTodo', mis muudab ülesande 'completed' olekut.
  // Funktsioon võtab argumendiks ülesande 'id'.
  // 'setTodos' funktsiooni abil kaardistatakse üle 'todos' massiiv.
  // Kui ülesande 'id' vastab argumendile, muudetakse selle 'completed' olekut vastupidiseks.
  function toggleTodo(id) {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  // Defineeritakse funktsioon 'deleteTodo', mis eemaldab ülesande.
  // Funktsioon võtab argumendiks ülesande 'id'.
  // 'setTodos' funktsiooni abil filtreeritakse 'todos' massiiv, eemaldades ülesande, mille 'id' vastab argumendile.
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Defineeritakse funktsioon 'handleKeyPress', mis lisab ülesande, kui vajutatakse Enter klahvi.
  // Funktsioon võtab argumendiks sündmuse objekti 'e'.
  // Kui vajutatud klahv on 'Enter', kutsutakse 'addTodo' funktsiooni.
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  // Komponent tagastab JSX-i, mis renderdab täiustatud ülesannete nimekirja.
  // Peamine div sisaldab pealkirja, sisestusvälja ja nuppu ülesande lisamiseks.
  // Sisestusväli kuvab 'inputValue' ja kutsub 'setInputValue' funktsiooni, kui väärtus muutub.
  // Nupp kutsub 'addTodo' funktsiooni, kui sellele klikitakse.
  // 'todos' massiiv renderdatakse loeteluna, kus iga ülesanne kuvatakse listi elemendina.
  // Iga ülesande kõrval on märkeruut, mis kutsub 'toggleTodo' funktsiooni, kui selle olekut muudetakse.
  // Iga ülesande kõrval on ka kustutamise nupp, mis kutsub 'deleteTodo' funktsiooni, kui sellele klikitakse.
  // Kui 'todos' massiiv on tühi, kuvatakse teade, et ülesandeid pole.
  return (
    <div className="todo-list">
      <h2>Advanced Todo List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-items">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <button 
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p className="empty-state">No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoList;
