import React, { Component } from 'react';
import styles from './work.module.scss';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dataSource }) =>{
    return <div className={ styles.worklist }>
        <ul>
            {
                dataSource && dataSource.map(item=>
                    <li key={item.id}>
                      
                            <div className={ styles.cover }>
                                <img src={item.cover}  alt="portfolio"/>
                            </div>
                            <div className={styles.workbrief}>
                                <h3> <a href={item.link}>{item.title}</a></h3>
                                <p> {item.brief}</p>
                            </div> 
                            <div className={styles.tag}>
                                    { item.tags && item.tags.map(i=><span key={i}>{i}</span>) }
                                    </div>  
                                    <div>
                                    <a href={item.link}>Link</a>
                                        </div> 
                      
                    </li>
                )
            }
        </ul>
    </div>
}