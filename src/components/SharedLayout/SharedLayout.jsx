import React from 'react';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import styles from './sharedLayout.module.css';

const SharedLayout = () => {
  const location = useLocation();
  return (
    <div
      style={{ background: location.pathname === '/' ? '#59b17a' : '#f7f8fa' }}
      className={styles.container}
    >
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
