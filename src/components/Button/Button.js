import './Button.css';


const Button =({label, backgroundColor, colorText,handleClick}) =>{


return( 

    <button class='boton' style={{backgroundColor, color:colorText}} onclick={handleClick}>{label}</button>
)

}

export default Button