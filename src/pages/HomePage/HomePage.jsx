import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {reviewThunk} from '../../redux/review/operationsReview';
import { medStoreSixThunk } from '../../redux/medStore/operationsMedStore';
import MainBanner from 'components/MainBanner/MainBanner';
import MedicineStores from 'components/MedicineStores/MedicineStores';
import PromoBanners from 'components/PromoBanners/PromoBanners';
import PromoSection from 'components/PromoSection/PromoSection';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(medStoreSixThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(reviewThunk());
  }, [dispatch]);

  return (
    <>
      <MainBanner />
      <PromoBanners />
      <MedicineStores />
      <PromoSection />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
