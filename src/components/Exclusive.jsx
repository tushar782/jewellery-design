
import women from '../assets/woman.png';

const Exclusive = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-r-none bg-black shadow-lg">
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16">
            <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-white font-serif">Exclusive</h3>
            <h3 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-white font-serif">Diamond</h3>
            <h3 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-white font-serif">Jewellery</h3>
            <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-lg md:text-xl">
              Explore Now
            </button>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 h-[400px] md:h-[600px] relative overflow-hidden rounded-b-lg md:rounded-r-lg md:rounded-l-none shadow-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${women})` }}
        />
      </div>
    </div>
  );
};

export default Exclusive;