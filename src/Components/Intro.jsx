import React from 'react';

export default function Intro() {
    return (
        <div style={{
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom, #fdfbfb, #ebedee)'
        }} className='text-center'>
            <div className='m-5'>
                <h1>Hello! I&apos;m</h1>
                <h1 style={{ fontSize: 80 }}>Michael Pu</h1>
                <br />
                <h3>Incoming Software Engineering Student at the University of Waterloo</h3>
            </div>
        </div>
    );
}
