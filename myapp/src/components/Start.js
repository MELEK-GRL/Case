import {Link} from 'react-router-dom' 
import Home from '../pages/Home';
function Start() {
  return (
    <div className="start-container">
      <h3>Welcome to the TestCase APP!</h3>
      <span>We created this exercise to gain insights about your development skills.</span>
      <Link className="link-start" to="/home">Start</Link>
    </div>
  );
}

export default Start;
