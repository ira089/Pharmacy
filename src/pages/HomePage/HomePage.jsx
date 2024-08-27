import MainBanner from 'components/MainBanner/MainBanner';
import MedicineStores from 'components/MedicineStores/MedicineStores';
import PromoBanners from 'components/PromoBanners/PromoBanners';
import PromoSection from 'components/PromoSection/PromoSection';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';
import React from 'react';

const HomePage = () => {
  return (
    <>
    <MainBanner/>
    <PromoBanners/>
    <MedicineStores/>
    <PromoSection/>
    <ReviewsSection/>
    </>
   
  )
}

export default HomePage