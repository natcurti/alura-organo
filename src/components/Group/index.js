import People from '../People';
import './Group.css';

const Group = (props) => {
    return (
        props.people.length > 0 &&
        <section className="groups" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className="peopleCard">
                {(props.people).map(eachPeople => <People key={eachPeople.name} name={eachPeople.name} charge={eachPeople.charge} image={eachPeople.image} primaryColor={props.primaryColor}/>)}
            </div>
        </section>
    )
}

export default Group;