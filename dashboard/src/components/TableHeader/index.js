import React from 'react';
import styles from './index.module.scss';

const TableHeader = ({table_title, total_items}) => {
    return(
        <div className={styles.header}>
            <div className={styles.header_title}>
                <h2>{table_title} ({total_items})</h2>
            </div>
            <div className={styles.search_input}>
            </div>
        </div>
    )
}

export default TableHeader;