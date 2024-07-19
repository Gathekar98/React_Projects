/* eslint-disable react/prop-types */

import styles from './Button.module.css';

const Button = ({isOutline, icon , text, ...rest}) => {
  return (
    <button {...rest} className={isOutline ? styles.whitebtn : styles.primary_btn}>
    {icon}
    {text}
    </button>
  )
}

export default Button
