import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

export default function PageTemplate(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
}
