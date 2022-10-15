
import '../styles/App.css';
import Header from '../components/NavBar'
import Cards from '../components/Cards'
import Start from '../components/Start'

function Intro() {
  
  return (
    
    <>
      <div className='all-container'>
       <div className='info-container'>
       <Header />
        <Cards />
        <Start />
       </div>
      </div>
    
    
    </>
  );
}

export default Intro;
