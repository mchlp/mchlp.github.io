import React from 'react';
import SocialMediadIcon from '../SocialMediaIcon';
import githubLogo from '../../Assets/github.svg';
import linkedinLogo from '../../Assets/linkedin.png';
import devpostLogo from '../../Assets/devpost.png';
import resume from '../../Assets/resume.pdf';
import message from './message.txt';
import styles from './About.module.css';
import Axios from 'axios';


export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'Loading...'
        };

        Axios.get(message).then((res) => {
            this.setState({
                message: res.data
            });
        });
    }

    render() {
        return (
            <div className='text-center center-full'>
                <div className='m-5'>
                    <h1>About Me</h1>
                    <div className={'my-5 ' + styles['button-container']}>
                        <SocialMediadIcon link='https://github.com/mchlp' src={githubLogo} alt='GitHub' />
                        <SocialMediadIcon link='https://www.linkedin.com/in/michael-pu/' src={linkedinLogo} alt='LinkedIn' />
                        <SocialMediadIcon link='https://devpost.com/mchlp' src={devpostLogo} alt='Devpost' />
                    </div>
                    <div className='text-left container'>
                        {this.state.message.split('\n').map((value, index) => {
                            return (
                                <p className={styles.text} key={index}>{value}</p>
                            );
                        })}
                        <p className={styles.text}> Feel free to shoot me an email at <a href='mailto:michael.pu123@gmail.com'>michael.pu123@gmail.com</a> or check out my resume <a href={resume}>here!</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
