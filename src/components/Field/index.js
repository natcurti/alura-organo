import './Field.css';

const Field = (props) => {

    const placeholderModify = `${props.placeholder} ...`

    const onChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div className={`field field-${props.type}`}>
            <label>{props.label}:</label>
            <input type={props.type} value={props.value} onChange={onChange} required={props.required} placeholder={placeholderModify}/>
        </div>
    )
}

export default Field;