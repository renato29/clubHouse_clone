import React from 'react'
import style from '../style/phoneConf.module.css'
import { Link } from 'react-router-dom';


function AllowNotif() {
return (
<div className={style.phoneConfContainer}>
    <div className='text-center'>
        <h1 className='mb-4'>Last Step =) !</h1>
        <h1 className='mb-3'>Enable Notifications to know people musics !!</h1>
        <div className={style.notificationContainer} >
            <div className='p-3'>
                <h3>"Partyfy Would ike to Send You Notifications "</h3>
                <p>Notifications may include alerts, sounds and icons  </p> 
            </div>
        <div className={style.action_btn}>
            <Link exact to='/home'>Don't Allow</Link>
            <Link exact to='/home'>Allow</Link>
            <img src='/images/handIcon.svg' alt='' className={style.hand_icon} />
        </div>
         </div>
    </div>

</div>
)
}

export default AllowNotif
