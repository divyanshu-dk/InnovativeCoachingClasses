import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Zap, Plus, Minus, Divide, Equal, X } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Star,
      title: 'Expert Tutors',
      description: 'Learn from experienced educators with proven track records',
    },
    {
      icon: Heart,
      title: 'Small Classes',
      description: 'Personalized attention in intimate learning environments',
    },
    {
      icon: Zap,
      title: 'Proven Results',
      description: '95% of our students achieve their academic goals',
    },
  ];

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Home - Innovative Coaching Classes</title>
        <meta name="description" content="Welcome to Innovative Coaching Classes - Ambition needs preparation. Your path to academic success starts here." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
        {/* Floating Math Signs */}
        <motion.div
          className="absolute top-20 left-10 text-primary opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Plus className="w-12 h-12" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-16 text-accent opacity-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Minus className="w-10 h-10" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-primary opacity-25"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Equal className="w-14 h-14" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-10 text-accent opacity-20"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <Divide className="w-11 h-11" />
        </motion.div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative"
          >
            {/* Additional Floating Math Signs around the title */}
            <motion.div
              className="absolute -top-8 left-1/4 text-accent opacity-25"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Plus className="w-8 h-8" />
            </motion.div>
            <motion.div
              className="absolute -top-4 right-1/3 text-primary opacity-30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Minus className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-12 text-accent opacity-20"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <X className="w-10 h-10" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-12 text-primary opacity-25"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Divide className="w-9 h-9" />
            </motion.div>
            <motion.div
              className="absolute -bottom-8 left-1/3 text-accent opacity-30"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Equal className="w-7 h-7" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 right-1/4 text-primary opacity-20"
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Plus className="w-5 h-5" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight"
            >
              Innovative Coaching Classes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-foreground mb-8"
            >
              Empowering Minds, Shaping Futures
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2 justify-center animate-bounce-slow"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button
                onClick={scrollToFeatures}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-800 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow animate-pulse-slow"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-secondary relative overflow-hidden">
        {/* Floating Math Signs in Features */}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Students Choose Us</h2>
            <p className="text-xl text-foreground">Excellence in education, proven by results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-primary-600/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-6 animate-bounce-slow">
                  <feature.icon className="w-8 h-8 text-white animate-pulse-slow" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-accent">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;