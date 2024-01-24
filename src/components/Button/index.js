import './Button.css';

const Button = (props) => {
    return (
        <button className="btn-submit">{props.children}</button>
    )
}

export default Button;