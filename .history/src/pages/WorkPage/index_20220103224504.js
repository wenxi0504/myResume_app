import React, { Component } from 'react';
import styles from './works.module.scss';
import WorkLists from '../../components/WorkLists';
import portfolioData from '../works.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.title }>
            <h3>My Work</h3>
            <p>A collection of different things I have worked on.</p>
        </div>
        <WorkLists dataSource={ portfolioData.data } />
    </div>
}