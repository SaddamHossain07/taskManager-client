import avatar from '../assets/user.gif'
import { Link, Outlet } from "react-router-dom";
import { FaPen, FaPlus } from "react-icons/fa6";

const Dashboard = () => {

    return (
        <>
            <div className="max-w-7xl flex">
                <div className="w-[300px] h-screen bg-gray-950 py-4 text-gray-400 task">
                    {/* user info */}
                    <div className="flex gap-4 items-center px-4 py-3">
                        <Link to='/'>
                            <div className="p-1 border-2 border-[#1877f2] w-14 h-14 rounded-full">
                                <img src={avatar} alt="" />
                            </div>
                        </Link>
                        <div className="flex flex-col">
                            <h3 className="tex-xl font-bold text-gray-300">Saddam Hossain</h3>
                            <p className="tex-lg">Web developer</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-800 h-1 my-4"></div>

                    {/* todo list */}
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <lord-icon
                                    src="https://cdn.lordicon.com/ppyvfomi.json"
                                    trigger="hover"
                                    colors="primary:#1877f2"
                                    style={{ width: '26px', height: '26px' }}>
                                </lord-icon>
                                <span className="text-lg text-gray-300 font-semibold" >My Task List</span>
                            </div>
                            <lord-icon
                                src="https://cdn.lordicon.com/ftndcppj.json"
                                trigger="hover"
                                hei
                                style={{ width: '24px', height: '24px' }}>
                            </lord-icon>
                        </div>
                        <ul className="ml-10 mt-3 space-y-2 list-">
                            <Link to='/dashboard/category'>
                                <li className="flex items-center gap-2">
                                    Top Priority
                                    <span className="text-xs text-gray-100 w-5 h-5 rounded-full bg-slate-500 flex justify-center items-center">6</span>
                                </li>
                            </Link>
                            <li className="flex items-center gap-2">
                                Office
                                <span className="text-xs text-gray-100 w-5 h-5 rounded-full bg-slate-500 flex justify-center items-center">12</span>
                            </li>
                            <li className="flex items-center gap-2">
                                Personal
                                <span className="text-xs text-gray-100 w-5 h-5 rounded-full bg-slate-500 flex justify-center items-center">4</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full bg-gray-800 h-1 my-4"></div>

                    {/* Priority */}
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <lord-icon
                                    src="https://cdn.lordicon.com/nizfqlnk.json"
                                    trigger="hover"
                                    colors="primary:#1877f2"
                                    style={{ width: '26px', height: '26px' }}>
                                </lord-icon>
                                <span className="text-lg text-gray-300 font-semibold" >My Priority</span>
                            </div>
                        </div>
                        <ul className="ml-10 mt-3 space-y-2 list-">
                            <li className="flex items-center gap-2">
                                High
                                <span className="text-xs text-gray-100 w-5 h-5 rounded-full bg-slate-500 flex justify-center items-center">6</span>
                            </li>
                            <li className="flex items-center gap-2">
                                Medium
                                <span className="text-xs text-gray-100 w-5 h-5 rounded-full bg-slate-500 flex justify-center items-center">12</span>
                            </li>
                            <li className="flex items-center gap-2">
                                Low
                                <span className="text-xs text-gray-100 w-5 h-5 rounded-full bg-slate-500 flex justify-center items-center">4</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-end px-4">
                        <Link to='/'>
                            <lord-icon
                                src="https://cdn.lordicon.com/heexevev.json"
                                trigger="loop"
                                delay="5000"
                                style={{ width: '50px', height: '50px' }}>
                            </lord-icon>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 h-screen dashboardBg p-6">
                    <Outlet></Outlet>
                </div>
            </div>

        </>
    );
};

export default Dashboard;