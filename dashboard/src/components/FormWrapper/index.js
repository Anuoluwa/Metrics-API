import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const FormWrapper = ({children, title, description, register_link, register_text}) => {
    return(
        <div className={styles.overall_wrapper}>
            <div className={styles.form_content}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.form_wrapper}>
                    {children}
                    <div className={styles.extras}>
                    {
                        register_text || register_link &&
                        <>
                            <p>Don't have an account? <span><NavLink to="/register">Sign Up</NavLink></span></p>
                            <p><NavLink to="/forgot-password">Forgot Password?</NavLink></p>
                        </>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default FormWrapper