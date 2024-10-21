import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.disclaimer}>
        This website is for educational purposes only. The information provided is not intended as medical advice. Please consult a healthcare professional for specific medical recommendations.
      </p>
    </footer>
  );
};

export default Footer;