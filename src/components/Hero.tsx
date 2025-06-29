
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
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 p-1">
                <img
                  src="/lovable-uploads/dcc95e8d-c3ae-4374-9e11-36cc6f326705.png"
                  alt="Robin Sebastian - Graphic Designer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
