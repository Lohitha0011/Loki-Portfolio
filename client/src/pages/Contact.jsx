import { useState, useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      type: 'Email',
      value: 'lohitha0801@gmail.com',
      href: 'mailto:lohitha0801@gmail.com',
      icon: '📧',
      bgColor: 'bg-red-500'
    },
    {
      type: 'Phone',
      value: '6303*****97',
      href: 'tel:6303197497',
      icon: '📞',
      bgColor: 'bg-green-500'
    },
    {
      type: 'GitHub',
      value: 'github.com/Lohitha0011',
      href: 'https://github.com/Lohitha0011',
      icon: '💻',
      bgColor: 'bg-gray-800'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/lohithabonthu',
      href: 'https://linkedin.com/in/lohithabonthu',
      icon: '💼',
      bgColor: 'bg-blue-600'
    }
  ];

  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="min-h-screen pt-20 relative z-10">
        <section className="content-section py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Me</h1>
              <p className="text-xl text-cosmic-silver">Feel free to reach out for collaborations or just a friendly hello!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-star-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-4 rounded-xl hover:border-star-white transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 ${contact.bgColor} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-xl">{contact.icon}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{contact.type}</div>
                        <div className="text-cosmic-silver">{contact.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Current Location</h3>
                  <p className="text-cosmic-silver">Amalapuram, Andhra Pradesh, India</p>
                </div>
              </div>
              {/* Contact Form */}
              <div className="p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-cosmic-silver border-opacity-30 rounded-lg px-4 py-3 text-white focus:border-star-white focus:outline-none focus:ring-2 focus:ring-star-white focus:ring-opacity-50 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-cosmic-silver border-opacity-30 rounded-lg px-4 py-3 text-white focus:border-star-white focus:outline-none focus:ring-2 focus:ring-star-white focus:ring-opacity-50 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-cosmic-silver border-opacity-30 rounded-lg px-4 py-3 text-white focus:border-star-white focus:outline-none focus:ring-2 focus:ring-star-white focus:ring-opacity-50 transition-all duration-300"
                      placeholder="Subject of your message"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea 
                      rows="6" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-cosmic-silver border-opacity-30 rounded-lg px-4 py-3 text-white focus:border-star-white focus:outline-none focus:ring-2 focus:ring-star-white focus:ring-opacity-50 transition-all duration-300 resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button 
                      type="submit" 
                      className="group inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 animate-fadeInUp cursor-pointer focus:outline-none focus:ring-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
