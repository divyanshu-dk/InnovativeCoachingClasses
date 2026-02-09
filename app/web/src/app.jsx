import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoursePage from '@/pages/CoursePage';
import WhyChooseUs from '@/pages/WhyChooseUs';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <>
      <Helmet>
        <title>Innovative Coaching Classes - Premier Tutoring & Coaching Center</title>
        <meta name="description" content="Transform your academic journey with Excellence Academy. Expert tutors, proven results, and personalized learning for Math, Science, English, and more." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;