import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import styles from './page.module.css';
import  CardPanel  from '../components/CardPanel';
import PromoteCard from '../components/PromoteCard'; 

const HomePage: React.FC = () => {


  return (
    <div className={styles.container}>
      <Banner />
      <div style={{ marginTop: '16px' }}>
        <PromoteCard />
      </div>
      {/* <div style={{ marginTop: '16px' }}>
        <CardPanel  />
      </div> */}
    </div>
  );
};

export default HomePage;