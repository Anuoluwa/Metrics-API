import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { RiUserSettingsFill, RiBarChartBoxLine } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { AiTwotoneAppstore} from 'react-icons/ai';
import styles from './index.module.scss';
import { connect } from 'react-redux';
//import { logout } from '../../redux/actions/authActions';

const SideBar = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
            <div className={styles.nav_list}>
                    <NavLink exact={true} to="/" className={styles.nav_item} activeClassName={styles.selected}>
                        <div className={styles.nav_icon}>
                           <AiFillHome  className={styles.fill_icon}/>
                        </div>
                        <div className={styles.nav_text}>
                            <p>Dashboard</p>
                        </div>
                    </NavLink>
                    <NavLink to="/metrics" className={styles.nav_item} activeClassName={styles.selected}>
                        <div className={styles.nav_icon}>
                            <AiTwotoneAppstore  className={styles.fill_icon}/>
                        </div>
                        <div className={styles.nav_text}>
                            <p>Metrics</p>
                        </div>
                    </NavLink>
                    <NavLink to="/average-metrics" className={styles.nav_item} activeClassName={styles.selected}>
                        <div className={styles.nav_icon}>
                            <RiBarChartBoxLine  className={styles.fill_icon}/>
                        </div>
                        <div className={styles.nav_text}>
                            <p>Chart</p>
                        </div>
                    </NavLink>
                    <NavLink to="/users" className={styles.nav_item} activeClassName={styles.selected}>
                        <div className={styles.nav_icon}>
                            <RiUserSettingsFill  className={styles.fill_icon}/>
                        </div>
                        <div className={styles.nav_text}>
                            <p></p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideBar
