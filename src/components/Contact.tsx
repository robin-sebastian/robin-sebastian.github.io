
import { Mail, Phone, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to bring your creative vision to life? Let's collaborate and create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">sencruzo96@gmail.com</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">+91 7025662377</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Born</h3>
            <p className="text-gray-600 text-sm">13/04/2002</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={20} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Kasaragod, Kerala</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start a Project?
          </h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            I'm passionate about design and committed to delivering innovative visual solutions. Let's discuss how I can help bring your creative vision to life.
          </p>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200">
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
