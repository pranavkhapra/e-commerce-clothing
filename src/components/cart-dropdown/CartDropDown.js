import React from 'react'
import CustomizedButton  from '../customized-button/CustomizedButton'
import './CartDropDown.scss'

const CartDropDown=()=>(
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomizedButton>GO TO CHECKOUT</CustomizedButton>
    </div>
)



export default CartDropDown