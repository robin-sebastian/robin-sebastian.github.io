const Hero = () => {
  return (
    <section id="home" className="relative bg-white min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900 z-0 clip-half-circle" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-medium text-teal-600 tracking-wider uppercase">— Hi</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              I'm <span className="text-amber-600">Robin Sebastian</span>
              <br />
              <span className="text-gray-900">Graphic Designer</span>
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

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center relative z-10">
            <img
              alt="Robin Sebastian - Graphic Designer"
              src="/lovable-uploads/d675957f-2b37-4406-beef-1040a2a42eb5.png"
              className="w-[340px] md:w-[400px] lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </div>

     <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-900 z-0 clip-half-circle" />
    </section>
  );
};

export default Hero;