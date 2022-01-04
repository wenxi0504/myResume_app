import React, { Component } from 'react';
import styles from './work.module.scss';


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
                                <h3>{item.title}</h3>
                            </div>                       
                     
                    </li>
                )
            }
        </ul>
    </div>
}