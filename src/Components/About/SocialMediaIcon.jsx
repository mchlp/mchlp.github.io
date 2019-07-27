import React from 'react';

export default function SocialMediaIcon(props) {
    return (
        <div className='mx-2'>
            <a href={props.link} rel='noopener noreferrer' target='_blank'>
                <img src={props.src} alt={props.alt} height='50 px' />
            </a>
        </div>
    );
}
