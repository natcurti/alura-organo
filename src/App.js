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

  const handleNewPeople = (newPerson) => {
    setPeople([...people, newPerson]);
  }

  const deletePersonFromGroup = (id) => {
    setPeople(people.filter(eachPerson => eachPerson.id !== id));
  }

  const changeGroupColor = (color, selectedGroup) => {
    setGroups(groups.map(group => {
      if(group.id === selectedGroup){
        group.groupColor = color;
      }
      return group;
    }))
  }

  const registerNewGroup = (newGroup) => {
    setGroups([...groups, {id: uuidv4(), name: newGroup.name, groupColor: newGroup.color}])
  }

  const handleFavorite = (id) => {
    setPeople(people.map(eachPerson => {
      if(eachPerson.id === id){
        eachPerson.favorite = !eachPerson.favorite;
      }
      return eachPerson;
    }))
  }

  return (
    <div>
      <Banner/>
      <FormContainer
        registerGroup={registerNewGroup}
        groups={groups.map(group => group.name)} 
        addNewPerson={person => handleNewPeople(person)}
      />
      {groups.map(group => 
        <Group 
          key={group.name} 
          name={group.name}
          id={group.id}
          color={group.groupColor}
          people={people.filter(eachPerson => eachPerson.group === group.name)}
          deletePerson={deletePersonFromGroup}
          changeColor={changeGroupColor}
          handleFavorite={handleFavorite}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
