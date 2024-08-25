import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { lazy } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/Loginpage/LoginPage';
import MedicineStorePage from 'pages/MedicineStorePage/MedicineStorePage';
import MedicinePage from 'pages/MedicinePage/MedicinePage';
import CartPage from 'pages/CartPage/CartPage';
import ProductPage from 'pages/ProductPage/ProductPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import Loader from './Loader/Loader';

// const HomePage = lazy(() => import('Pages/HomePage/HomePage'));


const App = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  const isRefreshing = false
  // useEffect(() => {
  //   dispatch(refresThunk());
  // }, [dispatch]);

  return isRefreshing ? (
    'Loading...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout component={<Navigate to="/home" />}/> }>
          <Route path="home" element={<HomePage />} />
          <Route path="produst" element={<ProductPage/>} />
          

          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="medicine-store" element={<MedicineStorePage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="medicine" element={<MedicinePage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* <ToastContainer autoClose={3000} /> */}
    </>
  );
 
};

export default App;