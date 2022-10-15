import { useState, useEffect } from 'react'
import listData from '../api/List.json'
import Lastes from './ui/Lastes'

function Sucsess() {
    const [list, setList] = useState([])

    useEffect(() => {
        setList(listData)
    }, [])
    return (
        <div className='listes'>
            <div className="list-item">
                <span>Completed actions</span>
                <ul className='add'>
                    {list && list.map((x, index) => <Lastes key={index} x={x} />)}
                </ul>
            </div>
        </div>
    );
}

export default Sucsess;