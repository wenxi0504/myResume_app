// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import styles from'./portfolio.module.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({dataSource}) => {
    return <div className={styles.portfolioList}>
       <ul>
       {
dataSource && dataSource.map(item=>
    <li key={item.id}>
            <div className={ styles.cover }>
                <img src={ item.cover } />
            </div>
            <div className={styles.workbrief}>
                <h3>{item.title}</h3>
                <p>{item.brief}</p>
                <div className={styles.tag}>
                    { item.tags && item.tags.map(i=><span key={i}>{i}</span>) }
                </div>
            </div>                       
     
    </li>
) }     
       </ul>
       </div>
}