import logo from './logo.svg';
import styles from './App.module.scss';
import{Link} from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
     <header className={styles.header} >
     <div className={styles.box}>
               <Link to="/">
                 <div className={styles.boxleft}>Wen Xu</div>
                 </Link>
               <div className={styles.boxright}>
                  <Link to="/">Home</Link>
                  <Link to="/works">work
                  </Link>
               </div>
            </div>
     </header>
    

    
       <section className={styles.content}>
     content
     </section>
    
     
   
      <footer className={styles.footer} >
     <p><b>2022 Wen Sophie Xu</b></p>

     </footer>
   
     

    </div>
  );
}

export default App;
