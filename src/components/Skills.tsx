
const Skills = () => {
  const skills = [
    { name: "Photoshop", level: 90 },
    { name: "Illustrator", level: 85 },
    { name: "InDesign", level: 80 },
    { name: "Corel Draw", level: 75 },
    { name: "Lightroom", level: 70 },
    { name: "Canva", level: 85 },
    { name: "UI/UX - Figma, Adobe XD", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-teal-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proficient in industry-standard design tools and software with hands-on experience in creating compelling visual content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                <span className="text-teal-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
