import React from 'react';
import styles from './index.module.scss';


export const FormInput = ({ handleChange, className, icon, type, placeholder, label, ...otherProps}) => {
    return(
        <div className={styles.form_group}>
            <div className={`${styles.input_label} ${className}`}>
                {
                    label &&  <label>{label}</label>
                }
                <input 
                    className={styles.input} 
                    onChange={handleChange} 
                    type={type} 
                    placeholder={placeholder}
                    {...otherProps} />
            </div>
            {   
                icon &&
                <div className={styles.input_icon}>
                    {icon}
                </div>
            }
        </div>
    )
}

export const FormSelectInput = ({className, label, value, name, handleChange, options, ...otherProps}) => {
    return(
        <div className={styles.form_select_input}>
             <div className={`${styles.input_label} ${className}`}>
                {
                    label &&  <label>{label}</label>
                }
                <select name={name} value={value} onChange={handleChange}>
                    <option value="">--Select Metric--</option>
                    {
                        options.map((option) => (
                            <option key={option._id} value={option._id}>{option.metric}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export const FormTextArea = ({className, rows, handleChange, ...otherProps}) => {
    return(
        <div className={styles._}>
            <textarea 
                className={`${styles.textarea} ${className}`} 
                rows={rows}
                onChange={handleChange}
                {...otherProps}
            >
            </textarea>
        </div>
    )
}

