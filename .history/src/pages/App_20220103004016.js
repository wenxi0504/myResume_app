import logo from './logo.svg';
import styles from './App.module.scss';
import{Link,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

function App() {
  return (
    <div className={styles.App}>
     <header className={styles.header} >
     <div className={styles.box}>
               <Link to="/">
                 <div className={styles.boxleft}>Profolio</div>
                 </Link>
               <div className={styles.boxright}>
                  <Link to="/"><p>Home</p></Link>
                  <Link to="/works"><p>Work</p>
                  </Link>
               </div>
            </div>
     </header>
    

    
       <section className={styles.content}>
         <div>
        
         <Route path="/" exact component={ HomePage } />
           <Route path="/works" exact component={ WorkPage } />
           <Route path="/works/:id" exact component={ WorkPageDetail } />
  
         </div>
      

     


     </section>
    
     
   
      <footer className={styles.footer} >
     <p><b>2022 Wen Sophie Xu</b></p>

     </footer>
   
     

    </div>
  );
}

export default App;
