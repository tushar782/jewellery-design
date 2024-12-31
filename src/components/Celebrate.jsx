import gold from '../assets/goldcard.jpg';
import diamond from '../assets/j1.jpg';
import traditional from '../assets/j5.jpg';
import wedding from '../assets/j4.jpg';
import { FaArrowRight } from "react-icons/fa";

const Celebrate = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-center mb-2">Celebrate With Gifts</h1>
                <p className="text-center text-gray-600 text-sm sm:text-base px-4 sm:px-8 lg:px-16 max-w-3xl mx-auto">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 lg:py-16">
                <div className="flex flex-col lg:flex-row justify-center gap-4">
                    {/* First section */}
                    <div className="w-full lg:w-1/2 h-auto lg:h-[550px] relative overflow-hidden shadow-lg">
                        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start p-4 sm:p-6 lg:px-16">
                            <div className="flex flex-col sm:flex-row gap-2 w-full">
                                <div className="w-full sm:w-[48%] lg:w-[350px] h-[300px] sm:h-[400px] lg:h-[480px] bg-black shadow-xl overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center relative"
                                        style={{ backgroundImage: `url(${gold})` }}
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                                            <button className="w-full sm:w-[90%] lg:w-[250px] py-2 bg-white text-black text-sm sm:text-base mx-auto block flex items-center justify-between px-4">
                                                <span>Anniversaries</span>
                                                <FaArrowRight className="text-black" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-[48%] lg:w-[350px] h-[300px] sm:h-[400px] lg:h-[480px] bg-black shadow-xl overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center relative"
                                        style={{ backgroundImage: `url(${diamond})` }}
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                                            <button className="w-full sm:w-[90%] lg:w-[250px] py-2 bg-white text-black text-sm sm:text-base mx-auto block flex items-center justify-between px-4">
                                                <span>Birthdays</span>
                                                <FaArrowRight className="text-black" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second section */}
                    <div className="w-full lg:w-1/2 h-auto lg:h-[560px] relative overflow-hidden shadow-lg">
                        <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start p-4 sm:p-6 lg:px-16">
                            <div className="flex flex-col gap-4 w-full">
                                <div className="w-full lg:w-[470px] h-[200px] sm:h-[220px] lg:h-[240px] bg-black shadow-xl overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center relative"
                                        style={{ backgroundImage: `url(${traditional})` }}
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                                            <button className="w-full py-2 sm:py-3 bg-white text-black text-sm sm:text-base flex items-center justify-between px-4">
                                                <span>Milestones</span>
                                                <FaArrowRight className="text-black" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[470px] h-[200px] sm:h-[220px] lg:h-[240px] bg-black shadow-xl overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center relative"
                                        style={{ backgroundImage: `url(${wedding})` }}
                                    >
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
                                            <button className="w-full py-2 sm:py-3 bg-white text-black text-sm sm:text-base flex items-center justify-between px-4">
                                                <span>Engagements</span>
                                                <FaArrowRight className="text-black" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Celebrate;
