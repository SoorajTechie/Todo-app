import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState('');

  const getDayName = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const today = new Date();
  const dayName = getDayName(today);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>My ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => settodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            settodos([...todos, { id: Date.now(), text: todo, status: false }]);
            settodo(''); // Clear input after adding
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {todos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    settodos(todos.map(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    }));
                  }}
                  checked={obj.status}
                  type="checkbox"
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    settodos(todos.filter(obj2 => obj2.id !== obj.id));
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      {/* LinkedIn Icon */}
      
    </div>
  );
}

export default App;
