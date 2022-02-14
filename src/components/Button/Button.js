import './Button.css';


const Button =({label, backgroundColor, colorText,handleClick}) =>{


return( 

    <button className='boton' style={{backgroundColor, color:colorText}} onClick={handleClick}>{label}</button>
)

}

export default Button