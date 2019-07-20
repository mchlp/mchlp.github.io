import React from 'react';
import SocialMediadIcon from '../Components/SocialMediaIcon';
import githubLogo from '../Assets/github.svg';
import linkedinLogo from '../Assets/linkedin.png';
import devpostLogo from '../Assets/devpost.png';
import resume from '../Assets/resume.pdf';

const message = `
Hi! My name is Michael and I'll be attending the University of Waterloo 
next year for Software Engineering. I've been to a few hackathons and 
participated a number of competitive programming competitions.
---
I started programming in grade nine using Python before taking interest 
in competitive programming. From then on, I've worked with numerous 
programming languages and frameworks.

---
Currently, I've been focusing on web developement using React and machine 
learning using TensorFlow.
`;

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
                </div>
                <div className='text-left container'>
                    {message.split('---').map((value, index) => {
                        return (
                            <p key={index} style={{ fontSize: 20 }}>{value}</p>
                        );
                    })}
                    <p style={{ fontSize: 20 }}> Feel free to shoot me an email at <a href='mailto:michael.pu123@gmail.com'>michael.pu123@gmail.com</a> or check out my resume <a href={resume}>here!</a></p>
                </div>
            </div>
        </div>
    );
}
