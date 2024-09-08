import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import * as schema from '../../../../schemas/schemas';
import Input from '../../../Input/Input';
import styles from './cartForm.module.css';

const CartForm = ({ handleFormSubmit }) => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: ''
  // });

  // Проверка на заполненность всех полей
  // const allFieldsFilled = (data) => {
  //   return Object.values(data).every((field) => field.trim() !== '');
  // };

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;

    // Обновляем состояние
    // setFormData((prevData) => {
    //   const updatedData = {
    //     ...prevData,
    //     [name]: value,
    //   };

      // Если все поля заполнены, вызываем handleFormSubmit
  //     if (allFieldsFilled(updatedData)) {
  //       handleFormSubmit(updatedData);
  //     }

  //     return updatedData;
  //   });
  // };
const [name, setName]= useState('')
console.log(name)
  const handleChangeName = (evt) => {
setName(evt.target.value)
handleFormSubmit(name)
  }
 
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
      validationSchema={schema.cartFormSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        // if(handleFormSubmit){handleFormSubmit(values)}
        // else{console.log('first')}
        
        resetForm();
      }}
    >
      {/* {({ handleSubmit }) => ( */}
        <Form 
        // onSubmit={handleSubmit} 
        className={styles.form}>
          {/* <Input handleChange={(evt) => handleFormSubmit(evt.target.value)} name="name" placeholder="Enter text" type="text" textLabel="Name" /> */}
          <Input handleChange={handleChangeName} valueInput={name} name="name" placeholder="Enter text" type="text" textLabel="Name" />
          <Input name="email" placeholder="Enter text" type="email" textLabel="Email"/>
          <Input name="phone" placeholder="Enter text" type="text" textLabel="Phone"/>
          <Input name="address" placeholder="Enter text" type="text" textLabel="Address"/>
        </Form>
        {/* )}  */}
    </Formik>
  );
};

export default CartForm;
