import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, MessageCircle, TrendingUp, Shield, Plus, Minus, Equal, Divide } from 'lucide-react';

const WhyChooseUsPage = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Our team consists of highly qualified educators with 10+ years of teaching experience and proven track records in student success.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '95% of our students achieve their target grades, with many securing top positions in competitive examinations.',
    },
    {
      icon: MessageCircle,
      title: 'Doubt Clearing Sessions',
      description: 'Dedicated doubt-clearing sessions ensure no student is left behind. One-on-one support available.',
    },
    {
      icon: TrendingUp,
      title: 'Personalized Learning',
      description: 'Customized study plans tailored to each student\'s learning pace and academic goals.',
    },
    // {
    //   icon: Shield,
    //   title: 'Safe Environment',
    //   description: 'Modern, secure facilities with CCTV monitoring and strict safety protocols for student well-being.',
    // },
  ];

  const stats = [
    { value: 80, label: 'Students Taught', suffix: '+' },
    { value: 95, label: 'Success Rate', suffix: '%' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let current = 0;
      return setInterval(() => {
        current += stat.value / steps;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timers[index]);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Innovative Coaching Classes</title>
        <meta name="description" content="Discover what makes Excellence Academy the preferred choice for students seeking academic excellence." />
      </Helmet>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary-900 to-accent-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Choose Us?</h1>
              <p className="text-xl text-white/90">
                Discover what sets us apart and makes us the preferred choice for thousands of students
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-secondary relative overflow-hidden">
          {/* Floating Math Signs in Statistics */}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  <p className="text-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-secondary relative overflow-hidden">
          {/* Floating Math Signs in Highlights */}
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Key Strengths</h2>
              <p className="text-xl text-foreground">What makes us stand out from the rest</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-primary-600/20"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{highlight.title}</h3>
                  <p className="text-accent leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary-900 to-accent-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of successful students who chose Innovative Coaching Classes ?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-900 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUsPage;