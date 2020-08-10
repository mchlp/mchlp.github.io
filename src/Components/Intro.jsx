import React from 'react';
import SocialMediaIcon from '../Components/SocialMediaIcon';
import githubLogo from '../Assets/github.svg';
import linkedinLogo from '../Assets/linkedin.png';
import devpostLogo from '../Assets/devpost.png';

export default function Intro() {
    return (
        <div
            style={{
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(to bottom, #fdfbfb, #ebedee)',
            }}
            className="text-center"
        >
            <div className="m-5">
                <h1>Hey, I&apos;m</h1>
                <h1 style={{ fontSize: 80 }}>Michael</h1>
                <br />
                <h3>
                    2A Software Engineering Student at the University of
                    Waterloo
                </h3>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    <SocialMediaIcon
                        link="https://github.com/mchlp"
                        src={githubLogo}
                        alt="GitHub"
                    />
                    <SocialMediaIcon
                        link="https://www.linkedin.com/in/michael-pu/"
                        src={linkedinLogo}
                        alt="LinkedIn"
                    />
                </div>
                <hr />
                <h3>This site is currently in development. 🔨</h3>
            </div>
        </div>
    );
}
