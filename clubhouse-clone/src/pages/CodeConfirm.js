import React from 'react'
import style from '../style/phoneConf.module.css'
import { Link } from 'react-router-dom';

function CodeConfirm() {
    return (
        <div className={style.phoneConfContainer} >
            <Link exact to='/invite' className={style.backBtn}>
                <img src='/images/arrow.png' alt='' />
            </Link>

            <div className='text-center'>
                <h1 style={{window:'100%', maxWidth:'200px', marginBottom:"1em"}} >Enter the code we just texted you: 
                </h1>
                <input type='text' 
                style={{
                    width:'100%',
                    border: 'none',
                    textAlign: 'center',
                    outline:"none"}}/>
                <p className='mt-2'>Didn't receive it? <span> Tap to resend it. </span></p>
            </div>

            <Link exact to='/allow_notif'
            className= 'primaryBtn d-flex aglign-item-center'>Next
             <img src='/images/nextArrowIcon.svg' alt='arrow'/></Link>
        </div>
    )
}



export default CodeConfirm
