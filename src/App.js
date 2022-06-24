import "./App.css";
import Person from "./person";
import data from "./data";
import { useState } from "react";

function App() {
  const [person,setPerson] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{person.length} birthdays today</h2>
        <Person persons={person}/>
        <button onClick={()=>setPerson([])}>Clear all</button>
      </section>
   
    </main>
  );
}

export default App;
