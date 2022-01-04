// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import styles from'./home.module.scss'
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className={styles.wrap}>
        {/* Personal Info*/}
       <section className={styles.brief}>
       <img src={require("../../assets/images/wenxuReact2.jpg") }/>
       <h2>Wen Xu(Sophie)</h2>
       <ul>
          <li>Software Developer</li> 
          <li>Front-end Developer</li> 
          <li>Android Mobile Application Developer</li>
       </ul>
       <p>Welcome to my personal portfolio website. Please feel free to explore my website.</p>
       <p>I am a curious, motivated and driven software developer with 4 years of experience in project management in an IT company. I have worked for dozens of projects. I am familiar with HTML,CSS,JavaScript, React,NodeJS, C#, Java,SQL etc </p>
       <p>I love socializing and make friends. I have been travelling for many countries and cities such as HongKong, Philippines, Vietnam etc. I am an addiction for watermelon </p>
       </section>
        
         {/* work portfolio */}
         <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>A selection of portfolio</h3>
                <p>You can find more in the portfolio overview.</p>
            </div>
         
            <WorkLists dataSource = { worksData.data } />
        </section>
        
        
        
        </div>
}