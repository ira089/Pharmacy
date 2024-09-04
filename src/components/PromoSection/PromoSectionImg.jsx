import React from 'react';
import { NavLink } from 'react-router-dom';
import Img1M from '../../assets/img/PromoSection1M.png';
import Img2M from '../../assets/img/PromoSection2M.png';
import Img1T from '../../assets/img/PromoSection1T.png';
import Img2T from '../../assets/img/PromoSection2T.png';
import Img1D from '../../assets/img/PromoSection1D.png';
import Img2D from '../../assets/img/PromoSection2D .png';
import styles from './promoSectionImg.module.css';

const PromoSectionImg = () => {
  return (
    <div className={styles.containerPromo}>
      <h3>Add the medicines you need online now</h3>
      <p>
        Enjoy the convenience of having your prescriptions filled from home by
        connecting with your community pharmacy through our online platform.
      </p>
      <NavLink className={styles.link} to="/medicine-store">Buy medicine</NavLink>
      <picture className={styles.img}>
        <source
         media="(max-width: 767px)"
          srcSet={`${Img1M} 1x, ${Img2M} 2x`}
        />
        <source
           media="(min-width: 768px) and (max-width: 1440px)"
          srcSet={`${Img1T} 1x, ${Img2T} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${Img1D} 1x, ${Img2D} 2x`}
        />
        <img  src={Img1M} alt="girl with mobile" />
      </picture>
    </div>
  );
};

export default PromoSectionImg;
