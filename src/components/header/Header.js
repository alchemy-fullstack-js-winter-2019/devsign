import React from 'react';
import {
    Link
} from 'react-router-dom';
import styles from './Header.css';
import logo from './logo.png';




export default function Header() {
    return (
        <header className={styles.Header}>
            <section id={styles.logo}> 
                <img src={logo}/>
                <h1>Beep.</h1>
            </section>
            <nav>
                <Link to='/'> Home/Feed </ Link>
                <Link to='/profile'> Profile </ Link>
                <Link to='/settings'> Settings </ Link>
                <Link to='/login'> Login </ Link>
            </nav>
        </header>
    );
}
