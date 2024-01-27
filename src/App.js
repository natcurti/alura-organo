import { useState } from 'react';
import Banner from './components/Banner';
import FormContainer from './components/FormContainer';
import Group from './components/Group';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [groups, setGroups] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      groupColor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      groupColor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      groupColor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      groupColor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      groupColor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      groupColor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      name: 'Gestão e Inovação',
      groupColor: '#FFEEDF'
    }
  ]);

  const [people, setPeople] = useState([]);

  const handleNewPeople = (newPeople) => {
    setPeople([...people, newPeople]);
  }

  const deletePeopleFromGroup = (id) => {
    console.log("Colaborador deletado.", id);
    setPeople(people.filter(eachPeople => eachPeople.id !== id));
  }

  const changeGroupColor = (color, selectedGroup) => {
    setGroups(groups.map(group => {
      if(group.id === selectedGroup){
        group.groupColor = color;
      }
      return group;
    }))
  }

  return (
    <div>
      <Banner/>
      <FormContainer groups={groups.map(group => group.name)} addNewPeople={people => handleNewPeople(people)}/>
      {groups.map(group => 
        <Group 
          key={group.name} 
          name={group.name}
          id={group.id}
          color={group.groupColor}
          people={people.filter(eachPeople => eachPeople.group === group.name)}
          deletePeople={deletePeopleFromGroup}
          changeColor={changeGroupColor}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
