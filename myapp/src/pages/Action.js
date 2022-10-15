
import '../styles/Action.css'
import Header from "../components/Header";
import Warning from '../components/Warning';

function Action() {
  
  return (
    
    <>
      <div className='list-container'>
       <div className='info-list'>
        <Header/>
        <Warning/>
       </div>
      </div>
    </>
  );
}

export default Action;