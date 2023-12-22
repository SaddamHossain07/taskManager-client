
import { LuArrowDownUp } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { FaPen, FaPlus } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

const DashboardCategory = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="py-2 px-6 bg-gray-950 shadow-xl rounded-full text-gray-300 text-xl font-bold flex items-center gap-4">
                    <span className="pr-3 border-r-2 border-gray-400">Personal</span>
                    <IoCloseCircleOutline className="ml-3" />
                    <LuArrowDownUp />
                    <BsThreeDots />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-950 rounded-xl p-4 h-[400px] flex flex-col">
                    <h3 className="text-lg font-bold text-gray-300 px-2">To-Do</h3>
                    <ul className="mt-4 flex-1 text-gray-400">
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                    </ul>
                    <div className="w-full px-4 py-2 border border-gray-600 rounded-lg flex items-center gap-4 text-gray-600">
                        <FaPlus />
                        <input type="text" placeholder="Add task" className="border-0 outline-0 bg-gray-950 text-gray-300" />
                    </div>
                </div>
                <div className="bg-gray-950 rounded-xl p-4 h-[400px] flex flex-col">
                    <h3 className="text-lg font-bold text-gray-300">Ongoing</h3>
                    <ul className="mt-4 flex-1 text-gray-400">
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-950 rounded-xl p-4 h-[400px] flex flex-col">
                    <h3 className="text-lg font-bold text-gray-300">Completed</h3>
                    <ul className="mt-4 flex-1 text-gray-400">
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                        <li className="w-full px-4 py-2 bg-gray-950 hover:bg-gray-800 rounded-lg flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <GiCheckMark />Shoping
                            </div>
                            <BsThreeDotsVertical />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardCategory;