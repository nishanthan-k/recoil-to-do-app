import { MdOutlineRadioButtonUnchecked, MdOutlineCheckCircleOutline, MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

function ToDoCard(props) {
  const {todo: {task, isCompleted}} = props;
  
  return (
    <div className={`grid grid-flow-col place-content-between place-items-center py-4 px-2 border-2 border-purple-700  ${isCompleted && 'line-through'}`}>
      {isCompleted ? 
        <MdOutlineCheckCircleOutline className="cursor-pointer" /> 
        :
        <MdOutlineRadioButtonUnchecked className="cursor-pointer mdtext-xl" />
      }
      <p className="overflow-auto mb:max-w-52 sm:max-w-96">
        {task}
      </p>
      <MdDelete className="text-xl cursor-pointer transform transition-transform duration-200 hover:scale-125 hover:text-red-500" />
    </div>
  )
}

ToDoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  task: PropTypes.string,
}

export default ToDoCard;
