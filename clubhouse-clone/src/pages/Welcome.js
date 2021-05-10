
import React from 'react';
import style from '../style/welcome.module.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className={style.WelcomeContainer} >
            <h1> Welcome =*</h1>
            <div className={style.WelcomeInfo}>
                <p>Hey! We're working hard to add people to Partyfy as fast as we can, but right now you need an invite to sign up. Anyone can get one by joining the waitlist, or by asking an existing user for one.
                </p>
                <p>Hey! We're working hard to add people to Partyfy as fast as we can, but right now you need an invite to sign up. Anyone can get one by joining the waitlist, or by asking an existing user for one.
                </p>
                <p>we are getting hard to do Partyfy app new version.
                Make sure to have fun !
                </p>
            </div>
            <div className={style.actionBtn} >
                <Link exact to='/invite' className='primaryBtn d-flex align-item-center mb-3'> Get your username{" "}
                    <img src="" alt="" /> </Link>

                <Link>
                Have an invite text? Sign in now
                </Link>
            </div>

        </div >
    )
}
export default Welcome;
