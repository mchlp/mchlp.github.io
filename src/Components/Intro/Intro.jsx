import React from 'react';
import styles from './Intro.module.css';

export default function Intro() {
    return (
        <div className='text-center center-full'>
            <div className='m-5'>
                <h1>Hello! I'm</h1>
                <h1 className={styles.name}>Michael Pu</h1>
                <br />
                <h3>Incoming Software Engineering Student at the University of Waterloo</h3>
            </div>
        </div >
    );
}
