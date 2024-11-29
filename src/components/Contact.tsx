import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus({ type: 'info', message: 'Sending...' });

    try {
      await emailjs.sendForm(
        'service_rxfid7e',
        'template_xxxxxxx', // You'll need to replace this with your template ID
        form.current,
        'xxxxxxxxxxxxxx' // You'll need to replace this with your public key
      );
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      form.current.reset();
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail size={24} className="text-blue-400" />
              <span>Nikhilsaha719@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone size={24} className="text-blue-400" />
              <span>+91 9980316807</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin size={24} className="text-blue-400" />
              <span>Sikkim, India</span>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
            {status.message && (
              <div
                className={`p-3 rounded-lg text-center ${
                  status.type === 'success' ? 'bg-green-500' : 
                  status.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                }`}
              >
                {status.message}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;