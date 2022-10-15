
import { Routes, Route, Link } from 'react-router-dom'
import Action from '../../pages/Action';

function Listes({ x: { image, title, description, point } }) {

    return (
        <>
            <Link className='link-list' to="/action">
                <li className='list-info'>

                    <div className='list-color'>
                        <img className="list_img" src={image} alt='img' />
                    </div>
                    <div className='list-write'>
                        <span className='list_blacks'>{title}</span>
                        <span className='list_grays'>{description}</span>
                    </div>
                    <div className='list-point'>
                        <span>{point}+</span>
                    </div>
                </li>
            </Link>
            <Routes>
                <Route path='/action' element={<Action />} />
            </Routes>
        </>
    );
}
export default Listes;