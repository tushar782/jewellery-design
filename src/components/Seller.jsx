import gold from '../assets/goldcard.jpg';
import diamond from '../assets/j1.jpg'; 
import traditional from '../assets/j5.jpg';
import wedding from '../assets/j4.jpg';

const Seller = () => {
  const products = [
    { id: 1, title: "Product Name", image: diamond },
    { id: 2, title: "Product Name", image: gold },
    { id: 3, title: "Product Name", image: traditional },
    { id: 4, title: "Product Name", image: wedding },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map(product => (
            <div 
              key={product.id} 
              className="relative overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative pt-[133%]"> {/* 4:3 aspect ratio */}
                <img 
                  src={product.image} 
                  alt={`Product ${product.id}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-semibold text-center mb-3 md:mb-4">
                  {product.title}
                </h3>

                <div className="text-center">
                  <button className="w-full sm:w-auto bg-black text-white px-4 md:px-8 py-2 text-sm md:text-base border border-white hover:bg-gray-800 transition-colors duration-300">
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rectangular Card */}
        <div className="w-full md:w-[90%] lg:w-[80%] bg-black mt-8 md:mt-16 mx-auto shadow-lg">
          <div className="flex flex-col md:flex-row items-center p-4 md:p-8 space-y-4 md:space-y-0">
            {/* Left side text */}
            <div className="text-white w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-2 md:mb-4">
                Gold Mine 12+1 Monthly Plan
              </h2>
              <p className="text-sm md:text-base lg:text-lg">
                Pay 10 installments, get 25% Off in 1st + 100% Off on last
              </p>
            </div>

            {/* Right side Explore button */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <button className="w-full md:w-auto bg-white text-black px-6 md:px-8 py-2 text-sm md:text-base border border-white hover:bg-gray-100 transition-colors duration-300">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;