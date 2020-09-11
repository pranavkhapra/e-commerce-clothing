import React from 'react'
import {connect} from 'react-redux'
import './CollectionItem.scss'
import CustomizedButton from '../customized-button/CustomizedButton'
import {addItem} from '../../redux/cart/cart.actions'
function CollectionItem({item,addItem }) {
    const {name,price,imageUrl} =item;
    return (
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            />
            <div className="collection-footer">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                  {price}
                </span>
            </div>
            <CustomizedButton onClick={()=>addItem(item)} inverted>ADD TO CART</CustomizedButton>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem)
