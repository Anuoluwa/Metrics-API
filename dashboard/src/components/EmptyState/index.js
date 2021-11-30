import React from 'react'
import styles from './index.module.scss';
import empty_illustration from '../../assets/images/empty_illustration.svg'

const EmptyState = ({message}) => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.illustration}>
                    <img src={empty_illustration} alt="illustration empty state"/>
                </div>
                <div className={styles.text}>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyState