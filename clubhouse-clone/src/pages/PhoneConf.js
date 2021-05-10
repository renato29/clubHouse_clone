import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../style/phoneConf.module.css';
import PhoneInput from 'react-phone-number-input';

function PhoneConf() {
    const [value, setValue] = useState()
    return (
        <div className={style.phoneConfContainer}>
            <Link exact to='/' 
            className={style.backBtn}> 
            <img src='/images/arrow.png' alt=''/>
             </Link>

            <h1>Enter your phone number</h1>

            <PhoneInput
            international defaultCountry='IL'
            value={value}
            onChange={setValue} 
            />
            <p>By entering your number, you're agreeing to our
                <span> Terms of Services and Privacy Policy</span>
            </p>
            <Link 
            exact to='/code_confirm' 
            className='primaryBtn d-flex align-items-center'>
                Next
            <img src='/images/nextArrowIcon.svg' alt=''
            className='ml-1'/>
            </Link>
        </div>
    )
}


export default PhoneConf
