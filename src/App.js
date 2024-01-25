import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import FormContainer from './components/FormContainer';

function App() {

  const [people, setPeople] = useState([]);

  const handleNewPeople = (newPeople) => {
    console.log(newPeople);
    setPeople(...people, newPeople);
  }

  return (
    <div className="App">
      <Banner/>
      <FormContainer addNewPeople={people => handleNewPeople(people)}/>
    </div>
  );
}

export default App;
