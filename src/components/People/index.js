import './People.css';
import { IoCloseCircle } from "react-icons/io5";


const People = ({id, name, charge, image, color, deletePeople}) => {
    return (
        <div className="people">
            <IoCloseCircle size={25} className="delete" onClick={() => deletePeople(id)}/>
            <div className="header" style={{backgroundColor: color}}>
                <img src={image} alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{charge}</h5>
            </div>
        </div>
    )
}

export default People;