import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Plus, Minus, Equal, Divide } from 'lucide-react';

const AboutPage = () => {

  return (
    <>
      <Helmet>
        <title>About Us - Innovative Coaching Classes</title>
        <meta name="description" content="Learn about Innovative Coaching Classes' mission, vision, and commitment to your academic success." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary-900 to-secondary-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-white/90">
                Dedicated to nurturing academic excellence and shaping future leaders through personalized education
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-secondary relative overflow-hidden">
          {/* Floating Math Signs in Mission & Vision */}
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
            className="absolute bottom-20 right-10 text-primary opacity-18"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-2xl p-8 shadow-xl border border-primary-600/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-accent leading-relaxed">
                  To provide exceptional educational experiences that empower students to reach their full potential through innovative teaching methods, personalized attention, and a supportive learning environment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-2xl p-8 shadow-xl border border-primary-600/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-accent leading-relaxed">
                  To be the leading educational institution recognized for academic excellence, innovative teaching practices, and producing confident, well-rounded individuals ready to excel in their chosen fields.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


      </div>
    </>
  );
};

export default AboutPage; 