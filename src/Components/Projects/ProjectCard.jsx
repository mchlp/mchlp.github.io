import React, { Component } from 'react';
import styles from './Projects.module.css';

export default class ProjectCard extends Component {
    render() {
        return (
            <div className={'m-3 card border-secondary ' + styles['project-card']}>
                <img src={this.props.image} className={'card-img-top ' + styles['card-image']} alt="..." />
                <div className='card-body'>
                    <h5 className='card-title'>{this.props.title}</h5>
                    <p className='card-text'>{this.props.text}</p>
                    <div className={'btn btn-primary ' + styles['pointer-button']}>Read More</div>
                </div>
            </div>
        );
    }
}
