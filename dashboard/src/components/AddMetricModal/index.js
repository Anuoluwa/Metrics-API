import React, { useState, useMemo, useEffect } from 'react';
import { GiCancel } from 'react-icons/gi';
import Button, { PrimaryButton } from '../../elements/CustomButton';
import styles from './index.module.scss';
import { FormInput} from '../../elements/FormInput';
import { toast } from 'react-toastify';
import { addMetric } from '../../redux/actions/metricActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const AddMetricModal = ({ setOpenAddMetricModal }) => {

    const dispatch = useDispatch() 

    const {isLoading} = useSelector(state => state.metric)

    // Close Modal
    const [closeModal, setCloseModal] = useState(true)

    // Form Input Initialization
    const [metricInput, setMetricInput] = useState({
        name:"",
        value:""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value


        setMetricInput({
            ...metricInput,
            [name]:value
        })
    }


    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    // setMetric((metric: Imetric) => ({ ...metric, [name]: value }));



    const handleSubmit = (e) => {
        e.preventDefault()
        if(metricInput.name && metricInput.value){
            dispatch(addMetric(metricInput.name, metricInput.value))

            // Close "add metric" modal after form submission
            setOpenAddMetricModal(false)
        }else{
            toast.error("Please, fill all details")
        }
    }

    return(
        closeModal ?
        (<div className={styles._}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.cancel_button} 
                        onClick={() => {
                            setCloseModal(false);
                            setOpenAddMetricModal(false);
                        }}
                        >
                       <GiCancel className={styles.cancel_icon} />
                    </div>
                    <div className={styles.header}>
                        <h2>Add Metric</h2>    
                    </div>
                    <form action="">
                        <FormInput 
                            type="text"
                            label="Name"
                            placeholder="Input Name"
                            name="name"
                            value={metricInput.name}
                            handleChange={handleChange}
                            className={styles.form_input}
                            required
                        />

                        <FormInput 
                            type="text"
                            label="Value"
                            placeholder="Input value"
                            name="value"
                            value={metricInput.value}
                            handleChange={handleChange}
                            className={styles.form_input}
                            required
                        />
                       
                        <div className={styles.button_container}>
                            <Button 
                                className={styles.cancel_btn} 
                                onClick={() => {
                                setCloseModal(false);
                                setOpenAddMetricModal(false);
                            }}>
                                Cancel
                            </Button>
                            <PrimaryButton 
                                isLoading={isLoading}
                                onClick={handleSubmit} 
                                className={styles.submit_btn}
                                type="submit"
                            >
                                Add Metric
                            </PrimaryButton>
                        </div>
                    </form>    
                </div>
            </div>
        </div>) : null
    )
}


export default AddMetricModal