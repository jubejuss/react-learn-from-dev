import { useState } from 'react';

const SimpleTodoList = () => {
  // Defineeritakse kaks oleku muutujat: 'todos' ja 'inputValue'.
  // 'todos' on massiiv, mis hoiab kõiki ülesandeid, ja 'setTodos' on funktsioon selle muutmiseks.
  // 'inputValue' on string, mis hoiab praegust sisestusvälja väärtust, ja 'setInputValue' on funktsioon selle muutmiseks.
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Defineeritakse funktsioon 'addTodo', mis lisab uue ülesande.
  // Kui 'inputValue' ei ole tühi (pärast tühikute eemaldamist), lisatakse see 'todos' massiivi.
  // Pärast ülesande lisamist tühjendatakse 'inputValue'.
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      // '...todos' on JavaScripti süntaks, mida nimetatakse levitamise operaatoriks (spread operator).
      // See võtab olemasoleva 'todos' massiivi elemendid ja levitab need uude massiivi.
      // Seejärel lisatakse 'inputValue' uue elemendina selle massiivi lõppu.
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  // Komponent tagastab JSX-i, mis renderdab lihtsa ülesannete nimekirja.
  // Peamine div sisaldab pealkirja, sisestusvälja ja nuppu ülesande lisamiseks.
  // Sisestusväli kuvab 'inputValue' ja kutsub 'setInputValue' funktsiooni, kui väärtus muutub.
  // Nupp kutsub 'addTodo' funktsiooni, kui sellele klikitakse.
  // 'todos' massiiv renderdatakse loeteluna, kus iga ülesanne kuvatakse listi elemendina.
  return (
    <div className="simple-todo-list">
      <h2>Simple Todo List</h2>
      <div className="simple-todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="simple-todo-items">
        {todos.map((todo, index) => (
          <li key={index} className="simple-todo-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleTodoList;
