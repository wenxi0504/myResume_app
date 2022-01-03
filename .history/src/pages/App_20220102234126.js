import logo from './logo.svg';
import styles from './App.module.scss';
import{Link,Route} from 'react-router-dom'
import HomePage from'./HomePage'
import WorkPage from'./Workpage'
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
     <Route path="/" component={HomePage}/>
     <Route path="/works" component={WorkPage}/>
     <Route path="/works/:id" component={WorkPageDetail}/>


     </section>
    
     
   
      <footer className={styles.footer} >
     <p><b>2022 Wen Sophie Xu</b></p>

     </footer>
   
     

    </div>
  );
}

export default App;
