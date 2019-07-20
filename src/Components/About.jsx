import React from 'react';
import SocialMediadIcon from '../Components/SocialMediaIcon';
import githubLogo from '../Assets/github.svg';
import linkedinLogo from '../Assets/linkedin.png';
import emailLogo from '../Assets/email.png';
import devpostLogo from '../Assets/devpost.png';
import resume from '../Assets/resume.pdf';

export default function About() {
    return (
        <div style={{
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ebedee'
        }} className='text-center'>
            <div className='m-5'>
                <h1>About Me</h1>
                <div className='my-5' style={{
                    display: 'flex',
                    justifyContent: 'center',

                }}>
                    <SocialMediadIcon link='https://github.com/mchlp' src={githubLogo} alt='GitHub' />
                    <SocialMediadIcon link='https://www.linkedin.com/in/michael-pu/' src={linkedinLogo} alt='LinkedIn' />
                    <SocialMediadIcon link='https://devpost.com/mchlp' src={devpostLogo} alt='Devpost' />
                    <SocialMediadIcon link='mailto:michael.pu123@gmail.com' src={emailLogo} alt='Email' />
                </div>
                <div className='text-left container'>
                    <p style={{ fontSize: 20 }}>Hi! My name is Michael and I'll be attending the University of Waterloo next year for Software Engineering. I've been to a few hackathons and participated a number of competitive programming competitions.</p>
                    <p style={{ fontSize: 20 }}>I began programming in grade 9 </p>
                    <p style={{ fontSize: 20 }}>Currently, I've been focused on web developement using React.</p>
                    <p style={{ fontSize: 20 }}>Check out my resume <a href={resume}>here!</a></p>
                </div>
            </div>
        </div>
    );
}
