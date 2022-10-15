import Header from "../components/Header";
import Approval from '../components/Approval';
import '../styles/Action.css'

function Congratulations() {
  
  return (
    
    <>
      <div className='list-container'>
       <div className='info-list'>
       <Header/>
       <Approval/>
       </div>
      </div>
    </>
  );
}

export default Congratulations;