import { MdOutlineRadioButtonUnchecked, MdOutlineCheckCircleOutline, MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

function ToDoCard(props) {
  const {item: {todo, isCompleted}} = props;
  return (
    <div className={`grid grid-flow-col place-content-between place-items-center py-4 px-2 border-2 border-purple-700 ${isCompleted && 'line-through'}`}>
      {isCompleted ? 
        <MdOutlineCheckCircleOutline /> 
        :
        <MdOutlineRadioButtonUnchecked />
      }
      <p>{todo}</p>
      <MdDelete className="text-xl" />
    </div>
  )
}

ToDoCard.propTypes = {
  item: PropTypes.object.isRequired,
  todo: PropTypes.string.isRequired,
}

export default ToDoCard;
