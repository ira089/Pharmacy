import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {pharmaciesReducer } from './medStore/medStoreSlice';
import {reviewsReducer } from './review/reviewSlice';
import { authReducer } from './auth/authSlice';
import searchReducer from './search/searchSlice';
import { productsReducer } from './products/productsSlice';
import {cartReducer} from './cart/cartSlice';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    pharmacies: pharmaciesReducer,
    reviews: reviewsReducer,
    search: searchReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)