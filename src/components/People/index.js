import './People.css';
import { IoCloseCircle } from "react-icons/io5";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";


const People = ({id, name, charge, image, color, deletePerson, favorite, handleFavorite}) => {

    const favoriteIconProps = {
        size: 25,
        onClick: () => handleFavorite(id),
        color: '#FF0000'
    }

    return (
        <div className="people">
            <IoCloseCircle size={25} className="delete" onClick={() => deletePerson(id)}/>
            <div className="header" style={{backgroundColor: color}}>
                <div className="container-image">
                    <img src={image} alt={name}/>
                </div>
            </div>
            <div className="footer">
                <div>
                    <h4>{name}</h4>
                    <h5>{charge}</h5>
                </div>
                <div className="favorite">
                    {favorite ? <IoMdHeart {...favoriteIconProps}/> : <IoMdHeartEmpty {...favoriteIconProps}/>}
                </div>
            </div>
        </div>
    )
}

export default People;