import React from 'react';
import { useLocation } from 'react-router-dom';
import ImgLogoM from '../../../assets/img/Mask group.png';
import ImgLogoWhiteM from '../../../assets/img/MaskWhiteM.png';
import ImgLogoD from '../../../assets/img/MaskGroupD.png';
import ImgLogoWhiteD from '../../../assets/img/MaskWhiteD.png';
import styles from './logo.module.css';

const Logo = () => {
  const location = useLocation();
  return location.pathname === '/home' ? (
    <div className={styles.wrapLogo}>
      <picture className={styles.img}>
        <source media="(max-width: 767px)" srcSet={ImgLogoWhiteM} />
        <source media="(min-width: 768px)" srcSet={ImgLogoWhiteD} />
        <img src={ImgLogoWhiteM} alt="Logo" />
      </picture>

      <p className={styles.text} style={{ color: '#fff' }}>
        E-Pharmacy
      </p>
    </div>
  ) : (
    <div className={styles.wrapLogo}>
      <picture className={styles.img}>
        <source media="(max-width: 767px)" srcSet={ImgLogoM} />
        <source media="(min-width: 768px)" srcSet={ImgLogoD} />
        <img src={ImgLogoM} alt="Logo" />
      </picture>
      <p className={styles.text} style={{ color: '#1d1e21' }}>
        E-Pharmacy
      </p>
    </div>
  );
};

export default Logo;
