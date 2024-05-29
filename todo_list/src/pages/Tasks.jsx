
import ToDoCard from '../components/ToDoCard'
import '../CSSfiles/Tasks.css'

import { useState, useEffect } from 'react'

const apiUrl = 'http://localhost:8000/todo'


export default function Tasks() {
    const [item,setItem] = useState(['']);
   
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setItem(data))

    }, [])


    return (
        <div>
            <h1>Your Tasks</h1>
            <div className='grid'>
                {item.map((item) => (
                    <ToDoCard
                        task={item.task}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        time={item.time}
                        option={item.option}
                    />
                ))}

            </div>

        </div>
    )
}

