import React from "react";
import { BsCheck } from 'react-icons/bs';
import './BsCheck.css'


const Check = ({ completed }) => {
console.log(completed)
    return (
        <div className={completed ?'checkbox active' : 'checkbox'}>
            {completed  &&
                <BsCheck size={40}/>
            }
        </div>
    );
};
export default Check;