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
                {(props.people).map(eachPerson => 
                    <People
                        key={eachPerson.name} 
                        name={eachPerson.name} 
                        charge={eachPerson.charge} 
                        image={eachPerson.image} 
                        favorite={eachPerson.favorite}
                        id={eachPerson.id}
                        color={props.color}
                        deletePerson={props.deletePerson}
                        handleFavorite={props.handleFavorite}
                    />
                )}
            </div>
        </section>
    )
}

export default Group;