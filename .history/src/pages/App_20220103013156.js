import logo from './logo.svg';
import styles from './App.module.scss';
import{Link,Routes,Route,withRouter} from 'react-router-dom'
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'
import Contact from './Contact'
function App() {
  //get value of location 
  let{location} = this.props;
  return (
    
    <div className={styles.App}>
     <header className={styles.header} >
     <div className={styles.box}>
               <Link to="/">
                 <div className={styles.boxleft}>Profolio</div>
                 </Link>
               <div className={styles.boxright}>
                  <Link to="/"><p className={ location.pathname==="/" ? styles.selected : null }>Home</p></Link>
                  <Link to="/works"><p className={ location.pathname==="/works" ? styles.selected : null }>Work</p>
                  </Link>
                  <Link to="/contact"><p className={ location.pathname==="/contact" ? styles.selected : null }>Contact</p></Link>
               </div>
            </div>
     </header>
    

    
       <section className={styles.content}>
         <div>
         < Routes>
         <Route path="/" exact element={ <HomePage/> }/>
           <Route path="/works" exact element={ <WorkPage/>} />
           <Route path="/works/:id" exact element={ <WorkPageDetail/> } />
           <Route path="/contact" exact element={ <Contact/> } />
         </Routes>
         </div>
      
       
     


     </section>
    
     
   
      <footer className={styles.footer} >
     <p><b>2022 Wen Sophie Xu</b></p>

     </footer>
   
     

    </div>
  );
}

export default withRouter(App);
