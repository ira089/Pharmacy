import React from 'react';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import styles from './sharedLayout.module.css';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <Footer />
      )}
    </div>
  );
};

export default SharedLayout;
