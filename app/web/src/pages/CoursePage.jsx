import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Plus, Minus, Equal, Divide } from 'lucide-react';

const CoursesPage = () => {
  const handleEnrollClick = () => {
    window.open('https://forms.gle/YPFtcuG6UgEyh8GDA', '_blank');
  };

  const courses = [
    {
      icon: BookOpen,
      title: 'Class 1',
      description: 'Comprehensive education for Class 1 students covering all subjects including Mathematics, English, Science, Social Studies, and more. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 2',
      description: 'Comprehensive education for Class 2 students covering all subjects including Mathematics, English, Science, Social Studies, and more. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 3',
      description: 'Comprehensive education for Class 3 students covering all subjects including Mathematics, English, Science, Social Studies, and more. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 4',
      description: 'Comprehensive education for Class 4 students covering all subjects including Mathematics, English, Science, Social Studies, and more. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 5',
      description: 'Comprehensive education for Class 5 students covering all subjects including Mathematics, English, Science, Social Studies, and more. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 6',
      description: 'Comprehensive education for Class 6 students covering all subjects including Mathematics, English, Science, Social Studies, and more. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'English', 'Hindi', 'Science', 'Social Studies', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 7',
      description: 'Comprehensive education for Class 7 students covering all subjects including Mathematics, Physics, Chemistry, Biology, Social Studies, English, and Computer Science. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Studies', 'English', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 8',
      description: 'Comprehensive education for Class 8 students covering all subjects including Mathematics, Physics, Chemistry, Biology, Social Studies, English, and Computer Science. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Studies', 'English', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 9',
      description: 'Comprehensive education for Class 9 students covering all subjects including Mathematics, Physics, Chemistry, Biology, Social Studies, English, and Computer Science. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Studies', 'English', 'Computer Science'],
    },
    {
      icon: BookOpen,
      title: 'Class 10',
      description: 'Comprehensive education for Class 10 students covering all subjects including Mathematics, Physics, Chemistry, Biology, Social Studies, English, and Computer Science. Build a strong foundation for future academic success with personalized attention and engaging learning methods.',
      instructor: 'Experienced Faculty',
      price: '₹2,500/month',
      features: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Studies', 'English', 'Computer Science'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Courses - Innovative Coaching Classes</title>
        <meta name="description" content="Explore our comprehensive range of courses designed to help students excel in their academic journey." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
              <p className="text-xl text-white/90">
                Comprehensive programs designed to help you achieve academic excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-secondary relative overflow-hidden">
          {/* Floating Math Signs in Courses */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-primary-600/20"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{course.title}</h3>
                    <p className="text-accent mb-4">{course.description}</p>

                    <div className="mb-4">
                      <p className="text-sm text-accent mb-2">What you'll learn</p>
                      <ul className="space-y-1">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-accent flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-primary-600/20">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <motion.button
                        onClick={() => handleEnrollClick(course.title)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                      >
                        Enroll Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-accent font-semibold">Remark: Only offline courses provided.</p>
            </div>
          </div>
        </section>
      </div>


    </>
  );
};

export default CoursesPage;