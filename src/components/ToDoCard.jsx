import { MdOutlineRadioButtonUnchecked, MdOutlineCheckCircleOutline, MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

function ToDoCard(props) {
  const { todo: { task, id, isCompleted }, setToDos } = props;
  
  const handleDeleteTask = () => {
    setToDos((prev) => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className={`bg-slate-700 text-gray-300 grid grid-flow-col place-content-between place-items-center py-4 px-2 border-2 border-purple-700 rounded-md ${isCompleted && 'line-through text-gray-500'}`}>
      {isCompleted ? 
        <MdOutlineCheckCircleOutline className="cursor-pointer checkCircleHoverEffect" /> 
        :
        <MdOutlineRadioButtonUnchecked className="cursor-pointer md:text-xl checkCircleHoverEffect" />
      }
      <p className="overflow-auto mb:max-w-52 sm:max-w-96 ">
        {task}
      </p>
      <MdDelete className={`text-xl ${!isCompleted ? 'cursor-pointer trashHoverEffect hover:text-red-500' : 'cursor-default'}`} onClick={handleDeleteTask} />
    </div>
  )
}

ToDoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  task: PropTypes.string,
  setToDos: PropTypes.func.isRequired,
}

export default ToDoCard;
