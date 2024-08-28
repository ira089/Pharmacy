import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),

  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email'
    )
    .required('Email is required'),

    phone: yup
    .string()
    .matches(
      /^\+38\d{10}$/,
      'Enter a valid Phone'),

  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required')
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email'
    )
    .required('Email is required'),

  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});
