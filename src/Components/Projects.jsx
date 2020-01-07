import React from 'react';

export default function Projects() {
    return (
        <div style={{
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to bottom, #ebedee, #fdfbfb)'
        }} className='text-center'>
            <div className='m-5'>
                <h1>Projects</h1>
                <div>
                    Here`&apos`s a list of recent projects I`&apos`ve been working on.
                    To be completed...
                </div>
            </div>
        </div>
    );
}
