import React from 'react';
import PropTypes from 'prop-types';
import styles from './TweetForm.css';

export default function SearchForm({ term, onChange }) {
    return (
        <>
        <div className={styles.div}>
            <label> Tweet: 
                <input name='tweet' value={term} onChange={onChange}/>
            </label>
        </div>
        </>
    );
}
SearchForm.propTypes = {
    term: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
;
