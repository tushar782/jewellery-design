import { MdPhone, MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-6 sm:py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 justify-between text-sm">
                    {/* Address Column */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base mb-2 sm:mb-3">Address</h3>
                        <p className="text-sm leading-relaxed">
                            Neelkanth Jewellers Pvt. Ltd.,<br />
                            Patrya Maruti Chowk, Shop No. 1 to 5,<br />
                            Amit Prerana Apartment,<br />
                            S No. 432/B, Naryan Peth, Pune,<br />
                            Maharashtra 411030.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base mb-2 sm:mb-3">Contact Us</h3>
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                            <MdPhone className="text-lg text-gray-800" />
                            <p className="text-sm">+91 02067687400</p>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                            <MdEmail className="text-lg text-gray-800" />
                            <p className="text-sm break-all">info@neelkanthjewellers.in</p>
                        </div>
                    </div>

                    {/* About Us Column */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base mb-2 sm:mb-3">About Us</h3>
                        <ul>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">About Us Special</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Rewards & Recognition</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Legacy</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Care & Maintenance</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Help Column */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base mb-2 sm:mb-3">Help</h3>
                        <ul>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">FAQs</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Size Guide</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Privacy Policy</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Terms & Conditions</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Discount Offers T & C</li>
                            <li className="mb-2 text-sm hover:text-gray-600 cursor-pointer">Disclaimer</li>
                        </ul>
                    </div>

                    {/* Offers & Discounts Column */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base mb-2 sm:mb-3">Offers & Discounts</h3>
                        <p className="text-sm mb-2">Sign Up & get instant updates on latest offers & discounts</p>
                        <div className="flex max-w-xs mx-auto sm:mx-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-200 rounded-l focus:outline-none"
                            />
                            <button
                                type="button"
                                className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-r hover:bg-yellow-600 focus:outline-none text-sm font-medium whitespace-nowrap"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 border-t border-gray-300"></div>

                <div className="flex flex-col items-center gap-4 mt-6 text-sm sm:flex-row sm:justify-between">
                    <p className="text-center sm:text-left order-3 sm:order-1">© 2024 Anura Systems. All Rights Reserved.</p>

                    <div className="text-center order-1 sm:order-2">
                        <div className="flex flex-col items-center">
                            <span
                                className="text-lg md:text-xl text-blue-600 hover:scale-105 transition-all"
                                style={{ fontFamily: "cursive" }}
                            >
                                neelkanth
                            </span>
                            <span className="text-xs md:text-sm text-red-500 hover:scale-105 transition-all">
                                J E W E L L E R S
                            </span>
                            <span className="text-[10px] md:text-xs hover:scale-105 transition-all">
                                A WORLD DESIGNS
                            </span>
                        </div>
                    </div>


                    <div className="flex space-x-6 order-2 sm:order-3">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-600 text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-600 text-xl">
                            <FaTwitter />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-600 text-xl">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
