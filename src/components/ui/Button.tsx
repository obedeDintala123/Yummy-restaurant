interface ButtonProps {
    onclick?: () => void;
    text: string;
    style: string;
}
const Button = ({onclick, text, style}: ButtonProps) => {
    return <button className={style} onClick={onclick}>{text}</button>;
}

export default Button;