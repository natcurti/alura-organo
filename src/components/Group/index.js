import People from '../People';
import './Group.css';
import hexToRgba from 'hex-to-rgba';

const Group = (props) => {
    return (
        props.people.length > 0 &&
        <section className="groups" style={{backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(props.color, 0.2)}}>
            <input type="color" className="input-color" value={props.color} onChange={e => props.changeColor(e.target.value, props.id)}/>
            <h3 style={{borderColor: props.color}}>{props.name}</h3>
            <div className="peopleCard">
                {(props.people).map(eachPeople => 
                    <People
                        key={eachPeople.name} 
                        name={eachPeople.name} 
                        charge={eachPeople.charge} 
                        image={eachPeople.image} 
                        id={eachPeople.id}
                        color={props.color}
                        deletePeople={props.deletePeople}
                    />
                )}
            </div>
        </section>
    )
}

export default Group;