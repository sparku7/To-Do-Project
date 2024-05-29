
import '../CSSfiles/Tasks.css'

function ToDoCard({ id, task, description, imageUrl, time, option }) {

   

  return (
    <div className ="grid">
    <div className="card">
      <img className="img" src={imageUrl} alt="no pic :(" />
      <h4>{task}</h4>
      <h4>{description}</h4>
      <h4>{time}</h4>
      <h4>{option}</h4>
       </div>

    </div>

  );
}

export default ToDoCard;