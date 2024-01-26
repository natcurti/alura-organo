import { useState } from 'react';
import Banner from './components/Banner';
import FormContainer from './components/FormContainer';
import Group from './components/Group';
import Footer from './components/Footer';

function App() {

  const groups = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Gestão e Inovação',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [people, setPeople] = useState([]);

  const handleNewPeople = (newPeople) => {
    setPeople([...people, newPeople]);
  }

  return (
    <div>
      <Banner/>
      <FormContainer groups={groups.map(group => group.name)} addNewPeople={people => handleNewPeople(people)}/>
      {groups.map(group => <Group 
        key={group.name} 
        name={group.name} 
        primaryColor={group.primaryColor} 
        secondaryColor={group.secondaryColor}
        people={people.filter(eachPeople => eachPeople.group === group.name)}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
