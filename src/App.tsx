import React from 'react';
import { ArrowRight, Factory, Cog, Shield, Truck, Globe, ChevronDown, Phone, Mail, MapPin, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Factory className="h-8 w-8 text-black" />
              <span className="ml-2 text-2xl font-bold text-black">GALAXY</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
              <a href="#facilities" className="text-gray-700 hover:text-black transition-colors">Facilities</a>
              <a href="#segments" className="text-gray-700 hover:text-black transition-colors">Segments</a>
              <a href="#gallery" className="text-gray-700 hover:text-black transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          Precision
          <span className="block text-gray-600">Engineering</span>
          <span className="block text-black">Excellence</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Leading manufacturer of precision engineering components, stainless steel reservoirs, 
          and automotive parts with state-of-the-art facilities in Alwar, India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
            Explore Our Capabilities
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
            Get Quote
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src="./public/one.jpg" // <-- Replace this with your image path
            alt="Company Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Company Overview */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Company Overview</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-2 rounded-lg">
                    <Cog className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Precision Manufacturing</h3>
                    <p className="text-gray-600">
                      Engaged in fabrication of stainless steel reservoirs, frames for railways, and precision 
                      engineering components including Geared Type Oil Lubrication Pumps, Brake components, 
                      Transmission components, and Suspension Components.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-2 rounded-lg">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Quality Excellence</h3>
                    <p className="text-gray-600">
                      Excellent quality control, sound infrastructure, and timely delivery make us a wise choice 
                      for discerning companies looking to outsource precision components from India.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white p-2 rounded-lg">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Custom Solutions</h3>
                    <p className="text-gray-600">
                      We specialize in manufacturing 100% customized and highly precise components, sub-assemblies 
                      and assemblies from materials ranging from casting, steel, brass, aluminum and seamless steel pipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-black mb-6">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Components</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hydraulic Components</li>
                    <li>• Precision Aluminum</li>
                    <li>• Magnesium Alloy</li>
                    <li>• Brass Components</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Industries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automotive</li>
                    <li>• Railways</li>
                    <li>• Tractors</li>
                    <li>• Generators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section id="facilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Manufacturing Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art facilities in Alwar, India</p>
            <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black text-white p-3 rounded-lg w-fit mb-4">
                <Cog className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">CNC Turning Machines</h3>
              <p className="text-gray-600">High-precision CNC turning capabilities for complex component manufacturing</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black text-white p-3 rounded-lg w-fit mb-4">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Milling Machines</h3>
              <p className="text-gray-600">Advanced milling equipment for precision component shaping and finishing</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black text-white p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Vertical Machining Center</h3>
              <p className="text-gray-600">State-of-the-art vertical machining centers for complex operations</p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-6">Testing & Quality</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">Comprehensive testing protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">Quality assurance systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">Performance validation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-6">Special Processes</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Heat Treatment</h4>
                  <p className="text-sm text-gray-600">Advanced heat treatment processes</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Chemical Process</h4>
                  <p className="text-sm text-gray-600">Specialized chemical treatments</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Coating</h4>
                  <p className="text-sm text-gray-600">Professional coating applications</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Painting</h4>
                  <p className="text-sm text-gray-600">Industrial painting solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Segments */}
      <section id="segments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Business Segments</h2>
            <p className="text-xl text-gray-600">Serving diverse industries with precision components</p>
            <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Automobile", icon: "🚗", desc: "Precision automotive components" },
              { name: "Agriculture", icon: "🚜", desc: "Tractor and farming equipment parts" },
              { name: "Aerospace", icon: "✈️", desc: "High-precision aerospace components" },
              { name: "Defence", icon: "🛡️", desc: "Military and defense equipment" },
              { name: "Energy", icon: "⚡", desc: "Power generation components" },
              { name: "Oil and Gas", icon: "🛢️", desc: "Petroleum industry equipment" },
              { name: "General Engineering", icon: "⚙️", desc: "Industrial engineering solutions" }
            ].map((segment, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center">
                <div className="text-4xl mb-4">{segment.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-2">{segment.name}</h3>
                <p className="text-gray-600 text-sm">{segment.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-black mb-6">Material Handling Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-black mb-2">Carbon Steel</h4>
                <p className="text-sm text-gray-600">High-strength carbon steel components</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-black mb-2">Alloy Steel</h4>
                <p className="text-sm text-gray-600">Specialized alloy steel processing</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-black mb-2">Stainless Steel</h4>
                <p className="text-sm text-gray-600">Corrosion-resistant steel fabrication</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-black mb-2">Others</h4>
                <p className="text-sm text-gray-600">Various specialty materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
<section id="gallery" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-black mb-4">Our Products Gallery</h2>
      <p className="text-xl text-gray-600">Showcasing our precision manufacturing capabilities</p>
      <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "./public/IMG_1245.JPG",
        "./public/IMG_1234.JPG",
        "./public/IMG_1238.JPG",
        "./public/IMG_1239.JPG",
        "./public/IMG_1240.JPG",
        "./public/IMG_1241.JPG",
        "./public/IMG_1242.JPG",
        "./public/IMG_1243.JPG",
        "./public/IMG_1244.JPG",
      ].map((src, index) => (
        <div key={index} className="aspect-square bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <img
            src={src}
            alt={`Product ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">Ready to discuss your precision manufacturing needs?</p>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-black p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+91 7567071724</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white text-black p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@galaxy.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white text-black p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Rajkot, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Factory className="h-8 w-8 text-white" />
                <span className="ml-2 text-2xl font-bold">GALAXY</span>
              </div>
              <p className="text-gray-400">
                Leading precision manufacturing company specializing in automotive, aerospace, and industrial components.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Precision Manufacturing</li>
                <li>CNC Machining</li>
                <li>Quality Testing</li>
                <li>Custom Components</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Automotive</li>
                <li>Aerospace</li>
                <li>Agriculture</li>
                <li>Defence</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Rajkot, India</li>
                <li>+91 7567071724</li>
                <li>info@galaxy.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Galaxy Manufacturing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;