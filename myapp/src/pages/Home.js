
import Header from "../components/Header";
import List from "../components/List";
import '../styles/Home.css'

function Home() {
  
  return (
    
    <>
      <div className='list-container'>
       <div className='info-list'>
       <Header/>
       <List/>
       </div>
      </div>
    </>
  );
}

export default Home;
