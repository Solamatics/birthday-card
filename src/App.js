import List from './List'
import { useState } from 'react';
import data from './data'


const App = () => {
  const [people,setPeople] = useState(data)

  return (

    <main>
      <section className="container">
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear</button>
      </section>
    </main>
  );
}

export default App;
