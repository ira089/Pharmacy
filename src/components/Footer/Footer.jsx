/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/Header/Logo/Logo';
import Divider from '@mui/material/Divider';
import ImgLogoWhiteM from '../../assets/img/MaskWhiteM.png';
import styles from './footer.module.css';
import Icon from 'components/Icon/Icon';

const Footer = () => {
  return (
    <footer className={styles.wrapFooter}>
      <div className={styles.wrapBottomFooter}>
        <div className={styles.wrapLogo}>
          <NavLink className={styles.link} to="/">
            <Logo color="#fff" logoImg={ImgLogoWhiteM} />
          </NavLink>
          <p className={styles.textFooter}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>
        </div>
        <div className={styles.wrapNav}>
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
          <ul className={styles.listFooterSocial}>
            <li className={styles.footerSocialItem}>
              <a
                href=" https://www.facebook.com/goITclub/ "
                target="_blank"
                rel="noreferrer"
              >
                <Icon width={28} height={28} name={'icon-facebook'} />
              </a>
            </li>
            <li className={styles.footerSocialItem}>
              <a
                href="https://www.instagram.com/goitclub/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon width={28} height={28} name={'icon-instagram'} />
              </a>
            </li>
            <li className={styles.footerSocialItem}>
              <a
                href="https://www.youtube.com/c/GoIT "
                target="_blank"
                rel="noreferrer"
              >
                <Icon width={28} height={28} name={'icon-youTube'} />
              </a>
            </li>
          </ul>
        </div>
      </div>

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
