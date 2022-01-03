import logo from './logo.svg';
import styles from './App.module.scss';
import{Link,BrowserRouter,Routes,Route,withRouter} from 'react-router-dom'
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
                  <Link to="/">Home</Link>
                  <Link to="/works">work
                  </Link>
               </div>
            </div>
     </header>
    

    
       <section className={styles.content}>
         <div>
         < Routes>
         <Route path="/" Component={HomePage}/>
         <Route path="/works" Component={WorkPage}/>
         <Route path="/works/:id" Component={WorkPageDetail}/>
         </Routes>
         </div>
      

     


     </section>
    
     
   
      <footer className={styles.footer} >
     <p><b>2022 Wen Sophie Xu</b></p>

     </footer>
   
     

    </div>
  );
}

export default App;
