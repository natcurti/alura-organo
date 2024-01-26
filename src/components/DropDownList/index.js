import './DropDownList.css';

const DropDownList = (props) => {

    const onChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select value={props.value} onChange={onChange} required={props.required}>
                <option value=""></option>
                {(props.items).map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDownList;