import gold from '../assets/goldcard.jpg';
import diamond from '../assets/j1.jpg'; // Add respective images
import silver from '../assets/j2.jpg';
import gems from '../assets/j3.jpg';
import wedding from '../assets/j4.jpg';
import traditional from '../assets/j5.jpg';
import modern from '../assets/j6.jpg';
import { FaArrowRight } from 'react-icons/fa';

const Jewellery = () => {
    const collections = [
        { id: 1, title: "Diamond Collection", image: diamond, buttonText: "MANGALSUTRA" },
        { id: 2, title: "Gold Necklaces", image: gold, buttonText: "NECKLACE" },
        { id: 3, title: "Silver Bracelets", image: silver, buttonText: "BANGLES" },
        { id: 4, title: "Precious Gems", image: gems, buttonText: "RINGS" },
        { id: 5, title: "Wedding Collection", image: wedding, buttonText: "EARRINGS" },
        { id: 6, title: "Traditional Sets", image: traditional, buttonText: "BRACELETS" },
        { id: 7, title: "Modern Designs", image: modern, buttonText: "CHOKERS" },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold font-mono text-center mb-4">The Jewellery</h1>
            <p className="text-center text-gray-600 mb-12">
                Explore our expansive jewellery collection, each piece a reflection of enduring beauty and style
            </p>

            <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                {collections.map((item) => (
                    <div
                        key={item.id}
                        className="relative w-[198px] h-[200px] group flex-shrink-0 overflow-hidden shadow-lg"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                            <button className="bg-white text-black px-4 py-2 flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-300">
                                {item.buttonText}
                                <FaArrowRight className="text-white group-hover:text-black transition-colors duration-300" />
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jewellery;
