import React from 'react';
import loading_icon from "../../assets/images/loading_png.png";
import styles from "./index.module.scss";

const LoadingState = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.spinner}>
                    <img src={loading_icon} alt="loading icon"/>
                </div>
                <div className={styles.text}>
                    Loading... Please wait
                </div>
            </div>
        </div>
    )
}

export default LoadingState