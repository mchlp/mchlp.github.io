import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import projectList from './projectList.json';

export default function Projects() {

    const projectCards = projectList.projects.map((value, index) => {
        return (
            <ProjectCard key={index} image={require('../../Assets/projects/' + value.image)} title={value.title} text={value.text} />
        );
    });

    return (
        <div className='text-center full'>
            <div className='container'>
                <h1>Projects</h1>
                <div className={styles['flex-container']}>
                    {projectCards}
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                    <div className={'m-3 ' + styles['dummy-project-card']} />
                </div>
                <div>
                    Here's a list of recent projects I've been working on.
                    To be completed...
                </div>
            </div>
        </div >
    );
}
