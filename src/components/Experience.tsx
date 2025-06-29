
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional experience in branding, advertising, and digital marketing with proven results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-2xl text-white">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Brandboz</h3>
              <p className="text-teal-100 text-lg">Advertising and Digital Marketing Agency</p>
              <p className="text-teal-200 font-medium mt-2">1 Year of Experience</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-teal-50">
                  Designed and executed creative concepts for branding, advertising campaigns, and social media content, ensuring alignment with client objectives and brand guidelines.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-teal-50">
                  Collaborated with marketing teams to develop visually appealing designs that increased client engagement and brand recognition.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-teal-50">
                  Created print and digital materials, including brochures, posters, banners, and web graphics, while meeting tight deadlines.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-teal-50">
                  Utilized Adobe Creative Suite (Photoshop, Illustrator, InDesign) to produce high-quality visuals for a variety of projects.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-teal-50">
                  Solved design challenges by adapting to client feedback and delivering optimized creative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
