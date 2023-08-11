import carrito from './Assets/carrito.svg'
import './CardWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'


const CartWidget =() => {
    const { totalQuantity} = useContext(CartContext)
     
    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }} >
        
        <img class="btn btn-primary" src={carrito} alt="cart-widget" style={{ width: '40px', height: '40px' }} />
            {totalQuantity}
        
            </Link>

        
     )

}

export default CartWidget