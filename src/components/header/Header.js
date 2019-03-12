import React from 'react';
import {
    Link
} from 'react-router-dom';
import styles from './Header.css';




export default function Header() {
    return (
        <header className={styles.Header}>
            <h1>Beep.</h1>
            <nav>
                <Link to='/'> Home/Feed </ Link>
                <Link to='/profile'> Profile </ Link>
                <Link to='/settings'> Settings </ Link>
                <Link to='/login'> Login </ Link>
            </nav>
        </header>
    );
}
