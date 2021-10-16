import List from './List'
import { useState } from 'react';
import data from './data'


const App = () => {
  const [people,setPeople] = useState(data)

  return (

    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear List</button>
      </section>
    </main>
  );
}

export default App;
