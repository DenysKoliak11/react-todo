import React from "react";
import style from './TaskInfo.module.css';

const TaskInfo = ({quantity,completedLength})=>{

    return (
        <div className={style.info}>
            <div className={style.create}>Created Tasks<span>{quantity}</span></div>
            <div className={style.finish}>Finished<span>{completedLength} or {quantity}</span></div>
        </div>
    );
};
export default TaskInfo;