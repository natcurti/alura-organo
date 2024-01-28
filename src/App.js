import { useState, useEffect } from 'react';
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
      groupColor: '#00D672'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      groupColor: '#0084FF'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      groupColor: '#61FFED'
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      groupColor: '#FF5252'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      groupColor: '#B200D6'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      groupColor: '#FFC800'
    },
    {
      id: uuidv4(),
      name: 'Gestão e Inovação',
      groupColor: '#B38AFF'
    }
  ]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/persons')
      .then(response => response.json())
      // .then(data => data.map(item => {
      //   console.log(item.group)
      //   return item
      // }))
      .then(data => setPeople(data))
  }, [])

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
