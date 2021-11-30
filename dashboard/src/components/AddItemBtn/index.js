import React from 'react';
import { IoMdAdd} from 'react-icons/io';
import { PrimaryButton } from '../../elements/CustomButton';
import styles from './index.module.scss';

const AddItemBtn = ({handleModalOpen, btnText}) => {
    return(  
        <div className={styles._}>
            <PrimaryButton 
                onClick={handleModalOpen}
                className={styles.add_btn} >
                <IoMdAdd className={styles.add_icon}/><p>{btnText}</p>
            </PrimaryButton>
        </div>
    )
}

export default AddItemBtn
