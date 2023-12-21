import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="w-full flex flex-col md:flex-row-reverse pt-4 lg:pt-16">
            <div className="w-full md:w-5/12 flex justify-center items-center">
                <iframe className="w-full h-[300px] md:h-[400px]" src="https://lottie.host/embed/41f9020c-67ae-4973-88eb-8896c93b1ca6/5lXoglX6g0.json"></iframe>
            </div>

            <div className="w-full md:w-7/12 px-6 pt-8 md:pt-0 flex flex-col justify-center items-center text-center">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-gray-700 text-center">One simple Task Manager for you <span className="border-b-[#1877f2] border-b-4 md:border-b-8 rounded-b-xl md:rounded-b-2xl lg:rounded-b-3xl">and</span> your team</h1>

                <p className="md:text-lg lg:text-xl text-gray-500 py-6 md:py-10 lg:py-16 max-w-[550px]">Over 30 million people organize their tasks, lists and manage their team’s projects with do.It</p>

                <button className="btn bg-[#1877f2] text-white font-semibold rounded-md shadow-md">Let's Explore <FaArrowRightLong /></button>
            </div>
        </div>
    );
};

export default Banner;