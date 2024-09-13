/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Header/Logo/Logo';
import Divider from '@mui/material/Divider';
import ImgLogoWhiteM from '../../assets/img/MaskWhiteM.png';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.wrapFooter}>
      <NavLink className={styles.link} to="/">
        <Logo color="#fff" logoImg={ImgLogoWhiteM} />
      </NavLink>
      <p className={styles.textFooter}>
        Get the medicine to help you feel better, get back to your active life,
        and enjoy every moment.
      </p>
      <nav className={styles.navList}>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/medicine-store">
          Medicine store
        </NavLink>
        <NavLink className={styles.navLink} to="/medicine">
          Medicine
        </NavLink>
      </nav>
      {/* <ul className={styles.listFooterSocial}>
        <li className={styles.footerSocialItem}>
          <a
            href=" https://www.facebook.com/goITclub/ "
            target="_blank"
            rel="noreferrer"
          >
            <svg class="footer-social-icon" width="28" height="28">
              <use href="./img/icons.svg#icon-ph_facebook-logo"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/goitclub/"
            target="_blank"
            rel="noreferrer"
          >
            <svg class="footer-social-icon" width="28" height="28">
              <use href="./img/icons.svg#icon-ph_instagram-logo"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/GoIT "
            target="_blank"
            rel="noreferrer"
          >
            <svg class="footer-social-icon" width="28" height="28">
              <use href="./img/icons.svg#icon-ph_youtube-logo"></use>
            </svg>
          </a>
        </li>
      </ul> */}
      <Divider
        aria-hidden="true"
        sx={{ bgcolor: 'rgba(247, 248, 250, 0.3)' }}
      />
      <div className={styles.policy}>
        <p>© E-Pharmacy 2023. All Rights Reserved</p>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: '#f7f8fa' }} />
        <a href="#" target="_blank">
          Privacy Policy
        </a>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: '#f7f8fa' }} />
        <a href="#" target="_blank">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
