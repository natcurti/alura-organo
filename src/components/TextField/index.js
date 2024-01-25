import './TextField.css';

const TextField = (props) => {

    const placeholderModify = `${props.placeholder} ...`

    const onChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}:</label>
            <input value={props.value} onChange={onChange} required={props.required} placeholder={placeholderModify}/>
        </div>
    )
}

export default TextField;