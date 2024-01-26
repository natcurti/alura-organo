import './People.css';

const People = ({name, charge, image, primaryColor}) => {
    console.log(primaryColor)
    return (
        <div className="people">
            <div className="header" style={{backgroundColor: primaryColor}}>
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