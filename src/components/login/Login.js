import React from 'react';
import styles from './Login.css';

export default function Login() {
    return (
        <form className={styles.Form}>
            <label>Username: 
                <input type="text"/>
            </label>
            <label>Password: 
                <input type="text"/>
            </label>
            <button>Submit</button>
        </form>
    );
}
