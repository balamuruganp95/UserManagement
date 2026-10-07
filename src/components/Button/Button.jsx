import React from 'react'
import './Button.css'

const Button = ({variant,children}) => {
  return (
    <div>
      <button className={`button ${variant}`}>{children}</button>
    </div>
  );
}

export default Button;