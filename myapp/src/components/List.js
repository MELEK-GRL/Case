import { useState, useEffect } from 'react'
import listData from '../api/List.json'
import Listes from './ui/Listes'

function List() {
    const [list, setList] = useState([])

    useEffect(() => {
        setList(listData)
    }, [])
    return (
        <div className='listes'>
            <div className="list-item">
                <span>Actions to be completed</span>
                <ul>
                    {list && list.map((x, index) => <Listes key={index} x={x} />)}
                </ul>
            </div>
        </div>
    );
}

export default List;
