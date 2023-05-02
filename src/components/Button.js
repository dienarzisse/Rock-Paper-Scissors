import './styling/css/Button.css';
function Button({children, ...rest}){
    return(
    <button className="Button" type="button" {...rest}>
        {children}
    </button>
    );
}

export default Button;