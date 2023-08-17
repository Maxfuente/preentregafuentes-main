import carrito from './Assets/carrito.svg'
import './CardWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'


const CartWidget =() => {
    const {totalQuantity} = useContext(CartContext);
    console.log(totalQuantity)
    return (
        <div>
        <Link to='/cart'  >
            
        <img className='Cartimg' src={carrito} alt='cart-widget' style={{ width: '40px', height: '40px' }} />
           
            {totalQuantity()}
        
            </Link>
            </div>

        
     )

}

export default CartWidget