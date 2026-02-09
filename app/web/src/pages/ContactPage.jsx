import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Plus, Minus, Equal, Divide } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Jagdeo Path, Jagdeo Puri Colony, Bailey Road, Patna, Bihar 800014',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 6202179721',
      link: 'tel:916202179721',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'divyanshuraj270402@gmail.com',
      link: 'mailto:divyanshuraj270402@gmail.com',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Innovative Coaching Classes</title>
        <meta name="description" content="Get in touch with Innovative Coaching Classes. Connect with us via WhatsApp for quick responses." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary-900 to-secondary-600 text-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/90">
                Have questions? We're here to help you start your journey to excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & WhatsApp CTA */}
        <section className="py-16 bg-secondary relative overflow-hidden">
          {/* Floating Math Signs in Contact */}
          <motion.div
            className="absolute top-10 left-5 text-primary opacity-15"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Plus className="w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute top-20 right-10 text-accent opacity-20"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Minus className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-20 text-primary opacity-18"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Equal className="w-12 h-12" />
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-5 text-accent opacity-15"
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Divide className="w-9 h-9" />
          </motion.div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Get In Touch</h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-accent hover:text-primary transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-accent">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-3xl p-12 text-center shadow-xl mb-12 border border-primary-600/20"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Quick Response on WhatsApp
                </h2>

                <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">
                  Get instant responses to your queries. Chat with us on WhatsApp for the fastest communication and personalized guidance.
                </p>

                <motion.a
                  href="https://wa.me/916202179721"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow hover:bg-green-600"
                >
                  <MessageSquare className="w-6 h-6" />
                  Chat on WhatsApp
                </motion.a>

                <p className="text-sm text-accent mt-6">
                  Available 24/7 for your convenience
                </p>
              </motion.div>

              {/* Email CTA Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-3xl p-12 text-center shadow-xl border border-primary-600/20"
              >
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Send us an Email
                </h2>

                <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">
                  Have detailed questions or need to share documents? Send us an email and we'll get back to you promptly.
                </p>

                <motion.a
                  href="mailto:divyanshuraj270402@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow hover:bg-blue-600"
                >
                  <Mail className="w-6 h-6" />
                  Send Email
                </motion.a>

                <p className="text-sm text-accent mt-6">
                  We respond within 24 hours
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;