


function Lastes({ x: { image, title, description, point } }) {

    return (
        <>
            <div className='link-list' to="/action">
                <li className='list-info border-item'>

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
            </div>
          
        </>
    );
}
export default Lastes;