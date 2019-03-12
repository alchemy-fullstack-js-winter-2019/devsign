import React from 'react';
import styles from './Settings.css';

export default function Settings() {
    return (
        <div className={styles.div}>
            <label>Delete Account? 
                <button>Delete</button>
            </label>
        </div>
    );
}
