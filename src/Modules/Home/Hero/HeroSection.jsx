
const HeroSection = () => {
  return (
    <section className="bg-[#F6F7F6] min-h-[600px] flex items-center">
      <div className="hero-layer"></div>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-[#003B2D] text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight mb-4">
          Embed Carbon offsetting into Every Transaction with AKHDAR API
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Effortlessly integrate carbon offsetting into transactions, enhance sustainability, and showcase your commitment to the environment.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-[#7CE495] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-green-400 transition-colors">
            API documentation
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 