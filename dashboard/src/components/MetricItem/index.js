import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from './index.module.scss';
// import { withRouter } from 'react-router';
// import { useDispatch } from 'react-redux';
// import EditProductModal from '../EditProductModal';
// import { useSelector } from 'react-redux';
// import EditProductImageModal from '../EditProductImageModal';


const MetricItem  = ({...metric_item}) => {

    // const createdAt = dateFormat(`${metric_item?.createdAt}`, "mmm dS, yyyy")
    // const expirationDate = dateFormat(`${metric_item?.expirationDate}`, "mmm dS, yyyy")

    // const dispatch = useDispatch()
    // // useEffect(() => {
    // //    dispatch(loadProducts())
    // // }, [dispatch])
    // const handleDelete = () => {
    //     return dispatch(deleteProduct())
    // }

    // console.log(added_product_id)
    // // const {added_product_id} = useSelector(state => state.product)

    // const [openEditProductModal, setOpenEditProductModal] = useState(false);
    // const [openEditProductImageModal, setOpenEditProductImageModal] = useState(false);

    return(
        <div className={styles.table_row}>
            <div className={styles.col}>
                <p>{metric_item?.name}</p>
            </div>
            <div className={styles.col}>
                <p>{metric_item?._value}</p>
            </div>
            <div className={styles.col}>
                <p>{metric_item?._time}</p>
            </div>
            {/* <div className={styles.col}>
                <p>{metric_item?._start}</p>
            </div> */}
            {/* <div className={styles.col}>
                <p>{metric_item?._stop}</p>
            </div> */}
        </div>
    )
}

export default MetricItem;