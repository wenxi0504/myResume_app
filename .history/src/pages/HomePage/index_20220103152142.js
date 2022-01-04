// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import styles from'./home.module.scss'

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
       <p>Welcome to my personal profolio website.I am a software developer. Please feel free to explore my website.</p>
       </section>
        
        
        
        
        
        </div>
}