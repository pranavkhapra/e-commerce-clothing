import React from 'react'
import './CustomizedButton.scss'
function CustomizedButton({children,isGoogleSignIn,inverted,...otherProps}) {
  //children s anything between button and other props that we want to pass  
    return (
        <button  className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}{...otherProps}>
          {children}  
        </button>
    )
}
export default CustomizedButton;
