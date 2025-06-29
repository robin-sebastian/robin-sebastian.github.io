
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Explore my creative work and design projects showcasing expertise in branding, digital marketing, and visual communication.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm max-w-md mx-auto">
            <h3 className="font-semibold text-gray-800 mb-2">View My Work</h3>
            <a 
              href="https://www.behance.net/robinzzrobinzz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              https://www.behance.net/robinzzrobinzz
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Branding</h3>
            <p className="text-gray-600">
              Creative brand identity designs that capture the essence of businesses and resonate with target audiences.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Advertising</h3>
            <p className="text-gray-600">
              Compelling advertising campaigns and promotional materials designed to drive engagement and conversions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Media</h3>
            <p className="text-gray-600">
              Social media graphics, web banners, and digital content optimized for various online platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
