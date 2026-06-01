import React from 'react'
import {MdMessage} from 'react-icons/md';
import style from './Button.module.css';

function Button(props) {
  return (
    <button className={style.button1}>
      {props.icon}
      {props.text}
    </button>
    
  )
}

export default Button
