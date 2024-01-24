import './TextField.css';

const TextField = (props) => {
    console.log(props);

    const placeholderModify = `${props.placeholder} ...`

    return (
        <div className="campo-texto">
            <label>{props.label}:</label>
            <input required={props.required} placeholder={placeholderModify}/>
        </div>
    )
}

export default TextField;