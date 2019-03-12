import React from 'react';
import {
    Link
} from 'react-router-dom';




export default function Header() {
    return (
        <nav>
            <Link to='/'> Home/Feed </ Link>
            <Link to='/profile'> Profile </ Link>
            <Link to='/settings'> Settings </ Link>
            <Link to='/login'> Login </ Link>
        </nav>
    );
}
