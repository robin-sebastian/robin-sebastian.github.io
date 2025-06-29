
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Seeking a graphic design position to apply my skills and knowledge and to contribute to the growth of a design team by creating visually appealing and effective designs that meet client needs and objectives.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Skilled in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and proficient in delivering innovative visual solutions tailored to client needs. Adept at collaborating with teams to develop engaging content across print and digital platforms.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-600">Diploma in Graphic Design (2023)</p>
                <p className="text-gray-600">ST.PIUS X College Rajapuram</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">Kasaragod, Kerala</p>
                <p className="text-gray-600">India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">English</span>
                  <span className="text-sm text-gray-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Malayalam</span>
                  <span className="text-sm text-gray-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Tamil</span>
                  <span className="text-sm text-gray-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Kannada</span>
                  <span className="text-sm text-gray-600">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
