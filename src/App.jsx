import styles from './style';
import { Button, Contact, Degree, Footer, Hero, Navbar, Projects, Testimonials, Work } from './components';

/* 
Navbar
Hello Hero
Bachelor Degree
Projects
Testimonials
Work 
Contact
Footer

*/

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Degree />
        <Projects />
        <Testimonials />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>

  </div>
);


export default App