import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadMetrics } from '../../redux/actions/metricActions';
import AddMetricModal from '../AddMetricModal';
import AddItemBtn from '../AddItemBtn';
import MetricItem from '../MetricItem';
import EmptyState from '../EmptyState';
import LoadingState from '../LoadingState';
import TableHeader from '../TableHeader';
import styles from './index.module.scss';

const MetricTable = (props) => {

    useEffect(() => {
        props.loadMetrics()
    }, []);

    const { metrics, isLoading } = props.metric

    console.log("---props---", metrics, isLoading);

    const total_metrics = metrics?.length

    const [openAddMetricModal, setOpenAddMetricModal] = useState(false);


    const handleModalOpen = () => {
        setOpenAddMetricModal(true)
    }
    
    if(isLoading){
        return <LoadingState />
    }

    return(
        <div className={styles._}>
            <div className={styles.header}>
                <TableHeader table_title="Metrics" total_items={total_metrics}/>
            </div>
            <div className={styles.container}>
                    <div className={styles.table_head}>
                        <div>Name</div>
                        <div>Value</div>
                        <div>Time</div>
                        {/* <div>Start Time</div> */}
                        {/* <div>Stop Time</div> */}
                    </div>
                <div className={styles.metric_list}>
                    {
                        total_metrics === 0 ? <EmptyState message="No added metric"/> :
                        metrics.map((metric) => {
                            console.log("--met---", metric)
                          return  <MetricItem key={metric?._time} {...metric}/>
                        })
                    }
                </div>
            </div>
            <div className={styles.add_metric}>
                <AddItemBtn btnText="Add Metric" handleModalOpen={handleModalOpen}/>
            </div>
            {
                openAddMetricModal && 
                <AddMetricModal 
                    setOpenAddMetricModal={setOpenAddMetricModal}
                />
                
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    metric:state.metric
})

export default connect(mapStateToProps, {loadMetrics}) (MetricTable)