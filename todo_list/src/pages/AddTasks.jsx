import { useState } from "react";
import '../CSSfiles/AddTasks.css'



const Create = () => {

    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [time, setTime] = useState('')
    const [option, setOption] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/todo',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })

        setTask('')
        setDescription('')
        setImageUrl('')
        setTime('')
        setOption('')
    }
    const user = { task, description, imageUrl, time, option }

  

    return (
        <div>

            <h2>Please enter your task below </h2>

      
        <form onSubmit={handleSubmit}>
             <br></br>
                <br></br>

            <label>Task: </label>
            <input type="text"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)} />
                <br></br>
                <br></br>

            <label>Task Description: </label>
            <input type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
                 <br></br>
                <br></br>


            <label>Image Url: </label>
            <input type="text"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} />
                 <br></br>
                <br></br>


            <label>Estimated Time: </label>
            <input type="text"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)} />
                 <br></br>
                <br></br>


            <label>Difficulty: </label>
            <input type="text"
                required
                value={option}
                onChange={(e) => setOption(e.target.value)} />
                 <br></br>
                <br></br>



            <button> Add User</button>

        </form>

        </div>
    )
}

export default Create;