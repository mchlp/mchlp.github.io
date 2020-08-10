import React from 'react';
import SocialMediadIcon from '../Components/SocialMediaIcon';
import githubLogo from '../Assets/github.svg';
import linkedinLogo from '../Assets/linkedin.png';
import devpostLogo from '../Assets/devpost.png';

const message = `
Hi! My name is Michael and I am currently attending the University of Waterloo 
for Software Engineering. I've been to a few hackathons and 
participated a number of competitive programming competitions.
---
I started programming in grade nine using Python before taking interest 
in competitive programming. From then on, I've worked with numerous 
programming languages and frameworks.
`;

const intermediateLang = ['JavaScript', 'Java', 'Python', 'C', 'C++', 'SQL', 'HTML', 'CSS', 'Bash'];
const basicLang = ['PHP', 'SQL',];
const frameworksTools = ['Git', 'Node.js', 'Linux', 'React', 'MongoDB', 'NginX', 'JavaFX', 'Docker'];

const langSection = (
    <div className='card mb-3 lang-card'>
        <div className='card-body'>
            <div style={{ fontSize: 16 }}>
                <div>
                    <span className='font-weight-bold'>Intermediate Knowledge: </span>
                    {
                        intermediateLang.map((lang, index) => (
                            <span key={index}>{(index !== 0 ? ', ' : '') + (lang)}</span>
                        ))
                    }
                </div>
                <br />
                <div>
                    <span className='font-weight-bold'>Basic Knowledge: </span>
                    {
                        basicLang.map((lang, index) => (
                            <span key={index}>{(index !== 0 ? ', ' : '') + (lang)}</span>
                        ))
                    }
                </div>
                <br />
                <div>
                    <span className='font-weight-bold'>Frameworks/Tools: </span>
                    {
                        frameworksTools.map((lang, index) => (
                            <span key={index}>{(index !== 0 ? ', ' : '') + (lang)}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    </div >
);

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
                    {langSection}
                    <p style={{ fontSize: 20 }}>Check out the projects I've been working on <a href='https://github.com/mchlp'>here</a>.</p>
                </div>
            </div>
        </div>
    );
}
