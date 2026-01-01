import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Feature, Footer, Download, Header } from '../container';
import { Navbar } from '../components';

const SectionWrapper = ({ children, id, className }) => {
  useEffect(() => {
    console.log(`Section ${id} mounted`);
  }, [id]);

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth easing
        opacity: { duration: 0.8 }
      }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
      style={{ position: 'relative', zIndex: 2 }}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <SectionWrapper id="header">
        <Header />
      </SectionWrapper>
      
      <SectionWrapper id="feature">
        <Feature />
      </SectionWrapper>

      <SectionWrapper id="download">
        <Download />
      </SectionWrapper>

      <SectionWrapper id="footer">
        <Footer />
      </SectionWrapper>
    </div>
  );
};

export default Home;
