import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../style/phoneConfContainer.module.css';


function PhoneConf() {
    const [value, setvalue] = useState('')
    return (
        <div className={style.phoneConfContainer}>
            <h1>Enter your phone number</h1>
            <p>By entering your number, you're agreeing to our
                <span> Terms of Services and Privacy Policy</span>
            </p>
        </div>
    )
}


export default PhoneConf
