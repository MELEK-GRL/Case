import {Link} from 'react-router-dom'

import tick from '../img/tick.png'

function Approval() {
    return (
        <>
            <div className="warning-container">
                <div className="warning-item">
                    <div className="warning-per">
                        <img alt='pngFind' src={tick} />
                        <span className='warning-write'>Congratulations!</span>
                        <span className='warning-text'>You've earned points for your participation!
                            Keep Up the great work!</span>
                    </div>
                    <div className="warning-info">
                        <Link className='warning-add' to="/points">Close</Link>
                    </div>
                </div>
            </div>
          
        </>

    );
}

export default Approval;