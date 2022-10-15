import { Link } from 'react-router-dom'

import pngFind from '../img/pngfind.png'
function Warning() {
    return (
        <>
            <div className="warning-container">
                <div className="warning-item">
                    <div className="warning-per">
                        <img alt='pngFind' src={pngFind} />
                        <span className='warning-point'>500+</span>
                        <span className='warning-write'>Phasellus et sem eget</span>
                        <span className='warning-text'>Lorem ipsum dolor sit amet consectetur</span>
                    </div>
                    <div className="warning-info">
                        <Link className='warning-add' to="/congratulations">Earn points</Link>
                    </div>
                </div>
            </div>
          
        </>

    );
}

export default Warning;
