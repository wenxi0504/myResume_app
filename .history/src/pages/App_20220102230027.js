import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
     Sophie's Website
    
     <header className={styles.header} >
     <div className={styles.box}>
               <link to="/">
                 <div className={styles.boxleft}>Profolio
                 </div>
                 </link>
               <div className={styles.boxright}>
                  <link to="/">
                    <p className={ location.pathname==="/" ? styles.selected : null }>
                      HOME</p>
                      </link>
                  <link to="/works">
                    <p className={ location.pathname==="/works" ? styles.selected : null } >
                      WORKS</p>
                      </link>
               </div>
            </div>
     header
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
