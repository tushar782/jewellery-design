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
      <div className="container mx-auto px-4 py-16">
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-3 aspect-h-4 w-full">
                <img 
                  src={product.image} 
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                {/* Text below the image */}
                <h3 className="text-xl font-semibold text-center mb-4">{product.title}</h3>

                {/* Explore button */}
                <div className="text-center">
                  <button className="bg-black text-white px-8 py-2 border border-white transition-colors duration-300">
                    EXPLORE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rectangular Card below Product Cards */}
         <div className="w-[80%] max-w-[1100px] h-48 bg-black mt-16 mx-auto flex items-center justify-between p-8 shadow-lg">
          {/* Left side text */}
          <div className="text-white w-1/2">
            <h2 className="text-2xl font-bold font-serif mb-4">Gold Mine 12+1  Monthly Plan</h2>
            <p className="text-lg-x5">Pay 10 intallments, get 25% Off in 1st +  100% Off on last</p>
          </div>

          {/* Right side Explore button */}
          <div className="flex items-center justify-center w-1/2">
            <button className="bg-white text-black px-8 py-2 border border-white transition-colors duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
