import {Routes,Route} from 'react-router-dom' 
import Intro from './pages/Intro';
import Home from './pages/Home'
import Action from './pages/Action'
import Congratulations from './pages/Congratulations'
import Points from './pages/Points'

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Intro/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/action' element={<Action/>}/>
            <Route path='/congratulations' element={<Congratulations/>}/>
            <Route path='/points' element={<Points/>}/>
        </Routes>
        </>
    );
  }
  
  export default App;
  