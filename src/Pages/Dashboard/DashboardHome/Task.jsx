import { FaRegCircle } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
const Task = ({ task, handleDelete }) => {

    return (
        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg">
            <div className="flex justify-between items-center">
                <div className=" text-gray-400 font-semibold flex items-center gap-3">
                    <FaRegCircle className="text-sm mt-1" />
                    <p>{task.title}</p>
                </div>
                <button onClick={() => handleDelete(task._id)}><RiDeleteBin2Line /></button>
            </div>
            <p className="text-xs ml-6 py-1">{task.description}</p>

        </li>
    );
};

export default Task;