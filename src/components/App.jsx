import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsRefreshing } from '../redux/auth/selectorsAuth';
import { refresThunk, currentFullThunk } from '../redux/auth/operationsAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';
// import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import Login from '../pages/Login/Login';
import MedicineStorePage from 'pages/MedicineStorePage/MedicineStorePage';
import MedicinePage from 'pages/MedicinePage/MedicinePage';
import CartPage from 'pages/CartPage/CartPage';
import ProductPage from 'pages/ProductPage/ProductPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(currentFullThunk());
  }, [dispatch]);

  return isRefreshing ? (
    'Loading...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="home" element={<HomePage />} /> */}
          <Route index element={<HomePage />} />
          <Route path="produst/:id" element={<ProductPage />} />
          <Route path="medicine-store" element={<MedicineStorePage />} />
          <Route path="medicine" element={<MedicinePage />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
