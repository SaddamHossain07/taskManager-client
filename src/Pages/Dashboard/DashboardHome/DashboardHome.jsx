
import { LuArrowDownUp } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Task from "./Task";

const DashboardHome = () => {

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['shopUser'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/tasks`)
            return res.data
        }
    })

    console.log(tasks)

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const newTask = {
            title: data.title,
            description: data.description,
            deadlines: data.deadlines,
            priority: data.priority
        }
        const productResponse = await axios.post('http://localhost:5000/tasks', newTask)
        if (productResponse.data.insertedId) {
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu Item added successfully",
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="py-2 px-6 bg-gray-950 shadow-xl rounded-full text-gray-300 text-xl font-bold flex items-center gap-4">
                    <span className="pr-3 border-r-2 border-gray-400">All Task</span>
                    <IoCloseCircleOutline className="ml-3" />
                    <LuArrowDownUp />
                    <BsThreeDots />
                </div>
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="py-2 px-6 bg-gray-950 shadow-xl rounded-full text-gray-300 text-xl font-bold flex items-center gap-4 cursor-pointer">
                    <FaPlus />
                    <span>Add Task</span>
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-950 rounded-xl p-4 max-h-[440px] flex flex-col task">
                    <h3 className="text-lg font-bold text-gray-300 px-2">To-Do</h3>
                    <ul className="mt-4 flex-1 text-gray-400">
                        {
                            tasks?.map(task => <Task key={task._id} task={task}></Task>)
                        }

                    </ul>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="w-full px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-4 text-gray-600">
                        <FaPlus />
                        <span>Add Task</span>
                    </button>
                </div>
                <div className="bg-gray-950 rounded-xl p-4 max-h-[440px] flex flex-col task">
                    <h3 className="text-lg font-bold text-gray-300 px-2">Ongoing</h3>
                    <ul className="mt-4 flex-1 text-gray-400">
                        {
                            tasks?.map(task => <Task key={task._id} task={task}></Task>)
                        }

                    </ul>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="w-full px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-4 text-gray-600">
                        <FaPlus />
                        <span>Add Task</span>
                    </button>
                </div>
                <div className="bg-gray-950 rounded-xl p-4 max-h-[440px] flex flex-col task">
                    <h3 className="text-lg font-bold text-gray-300 px-2">Completed</h3>
                    <ul className="mt-4 flex-1 text-gray-400">
                        {
                            tasks?.map(task => <Task key={task._id} task={task}></Task>)
                        }

                    </ul>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="w-full px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-4 text-gray-600">
                        <FaPlus />
                        <span>Add Task</span>
                    </button>
                </div>
            </div>

            {/* add product form  */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box  bg-gray-600">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                        <div className="form-control">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Title</span>
                            </label>
                            <input
                                type="text"
                                {...register("title")}
                                placeholder="task title"
                                className="input input-sm input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Description</span>
                            </label>
                            <input
                                type="text"
                                {...register("description")}
                                placeholder="description"
                                className="input input-sm input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Deadlines</span>
                            </label>
                            <input
                                type="date"
                                {...register("deadlines")}
                                className="input input-sm input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="block text-sm font-medium leading-6 text-gray-900">Priority</span>
                            </label>
                            <select {...register("priority")} className="select select-sm select-bordered w-full">
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white  p-2 rounded-none mt-4">
                                <FaPlus />Add Task
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default DashboardHome;