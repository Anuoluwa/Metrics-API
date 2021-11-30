import React from 'react';
import Nav from '../Nav';
import SideBar from '../SideBar';
import styles from './index.module.scss';

const Layout = ({children}) => {
    return(
        <div className={styles._}>
            <nav>
                <Nav />
            </nav>
            <aside>
                <SideBar />
            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout