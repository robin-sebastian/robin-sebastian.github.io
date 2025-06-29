
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-sm font-medium text-teal-600 tracking-wider uppercase">
                — HELLO
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              I'm <span className="text-amber-500">Robin</span>
              <br />
              <span className="text-gray-800">Graphic Designer</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Creative and detail-oriented Junior Graphic Designer with a solid foundation in design principles and 1 year of professional experience in branding, advertising, and digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-800 text-white px-8 py-3 font-medium hover:bg-teal-900 transition-colors duration-200">
                Let's Talk
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 font-medium hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/d675957f-2b37-4406-beef-1040a2a42eb5.png"
                  alt="Robin Sebastian - Graphic Designer"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-300 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
