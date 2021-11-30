import React from 'react';
import styles from './index.module.scss';

export const PrimaryButton = ({children, className, isLoading, handleClick, ...otherProps}) => {
    return(
        <button className={`${styles.primary_button} ${className}`} onClick={handleClick} {...otherProps}>
            {isLoading ? 'loading...' : children}
        </button>
    )
}

export const Button = ({children, className, isLoading, ...otherProps}) => {
    return(
        <button className={`${styles.normal_button} ${className}`} {...otherProps}>
            {isLoading ? 'loading...' : children}
        </button>
    )
}

export default Button;