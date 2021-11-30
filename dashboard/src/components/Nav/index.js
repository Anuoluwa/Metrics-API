import React from 'react';
import { connect } from 'react-redux';
import profile_avatar from '../../assets/images/profile_avatar.png';
// import { loadAdmin } from '../../redux/actions/authActions';
import styles from './index.module.scss';

const Nav = () => {

    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    Factorial Metric Dashboard
                </div>
                <div className={styles.nav_user_profile}>
                    <div className={styles.user_img}>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Nav;